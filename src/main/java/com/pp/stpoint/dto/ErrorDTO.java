package com.pp.stpoint.dto;

import com.pp.stpoint.dto.GenericDTO;

/**
 *
 * @author André Santos
 */
public class ErrorDTO extends GenericDTO{
	Exception exception;
	
	private ErrorDTO(){
		
	}
	private ErrorDTO(Exception ex){
		exception = ex;
		setTitle(ex.getClass().getName());
		setMessage(ex.getMessage());
	}
	
	public static ErrorDTO forException(Exception ex){
		return new ErrorDTO(ex);
	}
}
