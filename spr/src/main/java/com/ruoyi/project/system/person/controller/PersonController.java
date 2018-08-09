package com.ruoyi.project.system.person.controller;

import com.ruoyi.project.system.person.service.IPerson;
import com.ruoyi.project.system.person.utils.ConstantField;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

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
    
    /**
    @GetMapping("/personIndex")
    private String personIndex() {
    	
    	return prefix + "personIndex";
    }
    **/

    @RequestMapping(value = "/personIndex", produces = MediaType.APPLICATION_JSON_UTF8_VALUE,method=RequestMethod.POST)
    private String index(ModelMap map,@RequestParam(value = "user_code", required = false) String user_code,@RequestParam(value = "days_val", required = false) String days_val,@RequestParam(value = "region_val", required = false) String region_val){

        map.put("ListPerson", personService.getListStoreAll());
        return prefix + "personIndex";
    }
}
