package com.ruoyi.project.system.person.controller;

import com.ruoyi.project.system.person.service.IPerson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 首页处理
 *
 *
 */

@Controller
@RequestMapping("/system/person")
public class PersonController {

    private String prefix = "system/person/";

    @Autowired
    private IPerson personService;

    @GetMapping("/personIndex")
    private String index(ModelMap map){

        map.put("ListPerson", personService.getListStoreAll());
        return prefix + "personIndex";
    }
}
