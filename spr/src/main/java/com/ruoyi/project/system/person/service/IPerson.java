package com.ruoyi.project.system.person.service;

import com.ruoyi.project.system.person.entity.Person;
import com.ruoyi.project.system.person.entity.Store;

import java.util.List;

public interface IPerson {


    List<Store> getListStoreAll();

    List<Store> getListStoreByCity(String city);

    List<Store> getListStoreByCityDistrict(String city, String disrict);

    List<Store> getListStoreByRegion(String region);

    List<Person> getListPersonAll();
}
