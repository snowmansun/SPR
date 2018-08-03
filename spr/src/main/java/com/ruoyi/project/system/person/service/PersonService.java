package com.ruoyi.project.system.person.service;

import com.ruoyi.project.system.person.entity.Store;
import com.ruoyi.project.system.person.mapper.PersonMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 用户 UR
 *
 * @author ebest
 */
@Service
public class PersonService implements IPerson{

    @Autowired
    private PersonMapper personMapper;

    @Override
    public List<Store> getListStoreAll() {

        List<Store> listStore = personMapper.getListStoreAll();
        return listStore;
    }
}

