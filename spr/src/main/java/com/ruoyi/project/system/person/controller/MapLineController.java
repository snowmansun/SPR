package com.ruoyi.project.system.person.controller;

import com.ruoyi.project.system.person.entity.Store;
import com.ruoyi.project.system.person.service.IPerson;
import com.ruoyi.project.system.person.utils.ConstantField;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * @ Author     ：ebest
 * @ Date       ：Created in 11:06 2018/8/6
 * @ Description：${description}
 * @ Modified By：
 * @Version: version
 */
@Controller
@RequestMapping("/system/person")
public class MapLineController {

    private String prefix = ConstantField.prefix;

    @Autowired
    private IPerson personService;

    @GetMapping("/personMapIndex")
    private String index(ModelMap map){

        map.put("ListPerson", personService.getListStoreAll());
        map.put("ListUser", personService.getListPersonAll());
        return prefix + "personMapIndex";
    }

    @RequestMapping("/getMapCity")
    private String getListStoreByCity(ModelMap map, @Param("city") String city){

        map.put("ListPerson", personService.getListStoreByCity(city));
        return prefix + "personMapIndex";
    }

    @RequestMapping(value = "/getListStoreByCityDistrict", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    private String getListStoreByCityDistrict(ModelMap map, @Param("city") String city, @Param("district") String disrict, @Param("region") String region){

        if(region.equals("")==false){

            map.put("ListPerson", personService.getListStoreByRegion(region));
        }else if(city.equals("")){
            map.put("ListPerson", personService.getListStoreAll());

        }else if(disrict.equals("")){

            map.put("ListPerson", personService.getListStoreByCity(city));
        }else{
            map.put("ListPerson", personService.getListStoreByCityDistrict(city, disrict));
        }
        return prefix + "personMapIndex";
    }

    @PostMapping("/personPostIndex")
    private String indexPost(ModelMap map,@RequestParam(value = "user_code", required = false) String user_code,
    		@RequestParam(value = "days_val", required = false) String days_val,@RequestParam(value = "region_val", required = false) String region_val){

        map.put("ListPerson", personService.getListStoreAll());
        return prefix + "personPostIndex";
    }
    
    @RequestMapping(value = ConstantField.getListStoreByRegion, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    private String getListStoreByRegion(ModelMap map, @RequestParam(value = "region", required = false) String region){

        map.put(ConstantField.ListPerson, personService.getListStoreByRegion(region));
        return ConstantField.prefix + ConstantField.personMapIndex;
    }

    @RequestMapping(value = ConstantField.getListPersonAll, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    private String getListPersonAll(ModelMap map){

        map.put(ConstantField.ListPerson, personService.getListPersonAll());
        return ConstantField.prefix + ConstantField.personMapIndex;
    }
}
