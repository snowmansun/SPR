package com.ruoyi.project.system.person.mapper;

import com.ruoyi.project.system.person.entity.Person;
import com.ruoyi.project.system.person.entity.Store;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.ResultType;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 用户 UR
 *
 * @author ebest
 */
public interface PersonMapper {

    @Select("select * from sfa_store limit 1000")
    @ResultType(Store.class)
    List<Store> getListStoreAll();

    @Select("select * from sfa_store where Latitude is not null and City = #{city} limit 1000")  //limit 1000
    List<Store> getListStoreByCity(@Param("city") String city);

    @Select("select * from sfa_store where City = #{city} and District = #{district} limit 1000")
    List<Store> getListStoreByCityDistrict(@Param("city") String city, @Param("district") String district);

    @Select("select * from sfa_store where Region = #{region} limit 1000")
    List<Store> getListStoreByRegion(@Param("region") String region);

    @Select("select Code,FirstName,LastName from sfa_users")
    List<Person> getListPersonAll();

    //@Select("select storeCode, storeName, latitude, longitude from Store where storeCode in(select storeCode from RouteCustomer where userCode in (${user_code}))")
    //@Select("select Store.storeCode, storeName, latitude, longitude,RouteCustomer.UserCode from Store,RouteCustomer where  Store.storeCode= RouteCustomer.StoreCode and RouteCustomer.UserCode in (${user_code})")
    @Select("select Store.storeCode, storeName, latitude, longitude,sfa_RouteCustomer.UserCode from sfa_Store,sfa_route_customer where  sfa_Store.storeCode= sfa_RouteCustomer.StoreCode and sfa_RouteCustomer.UserCode in (${user_code})")
    List<Store> getRoutLineByUsers(@Param("user_code") String user_code);

}
