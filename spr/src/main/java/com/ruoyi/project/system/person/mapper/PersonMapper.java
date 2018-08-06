package com.ruoyi.project.system.person.mapper;

import com.ruoyi.project.system.person.entity.Store;
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
}
