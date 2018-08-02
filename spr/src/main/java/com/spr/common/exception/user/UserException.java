package com.spr.common.exception.user;

import com.spr.common.exception.base.BaseException;

/**
 * 用户信息异常类
 * 
 * @author spr
 */
public class UserException extends BaseException
{

    private static final long serialVersionUID = 1L;

    public UserException(String code, Object[] args)
    {
        super("user", code, args, null);
    }

}
