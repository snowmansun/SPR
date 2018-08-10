package com.ruoyi.project.system.person.utils;

/**
 * @ Author     ：ebest
 * @ Date       ：Created in 11:47 2018/8/6
 * @ Description：${description}
 * @ Modified By：
 * @Version: version
 */
public class PersonUtil {

    /**
     * 通过传入参数拼接SQL的in字符串
     * @param str
     * @return
     */
    public static String getFormatSplit(String str){

        String format_str="";
        String[] str_arr = str.split("\\,");

        for (String format: str_arr){

            format_str += "'"+format+"'"+",";
        }
        return format_str.substring(0, format_str.length()-1);
    }

    /**
     * 计算距离sql
     * @param x1  源点x
     * @param y1  源点y
     * @param x2  目的点x
     * @param y2  目的点y
     * @param name	字段名称
     * @return
     */
    public static String getDistanceByLocation(String x1,String y1,String x2,String y2,String name){

        String location_distance="if((x1=''||y1=''),'',ROUND(6378.138*2*ASIN(SQRT(POW(SIN(("+y2+"*PI()/180-"+y1+"*PI()/180)/2),2)+COS("+y2+"*PI()/180)*COS("+y1+"*PI()/180)*POW(SIN(("+x2+"*PI()/180-"+x1+"*PI()/180)/2),2)))*1000)) AS "+name+"";
        return location_distance;
    }
}
