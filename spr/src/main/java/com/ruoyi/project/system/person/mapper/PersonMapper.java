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

    @Select("select * from Store limit 1000")
    @ResultType(Store.class)
    List<Store> getListStoreAll();

    @Select("select * from Store where Latitude is not null and City = #{city} limit 1000")  //limit 1000
    List<Store> getListStoreByCity(@Param("city") String city);

    @Select("select * from Store where City = #{city} and District = #{district} limit 1000")
    List<Store> getListStoreByCityDistrict(@Param("city") String city, @Param("district") String district);

    @Select("select * from Store where Region = #{region} limit 1000")
    List<Store> getListStoreByRegion(@Param("region") String region);

    @Select("select Code,FirstName,LastName from users where Valid = 0")
    List<Person> getListPersonAll();
}
