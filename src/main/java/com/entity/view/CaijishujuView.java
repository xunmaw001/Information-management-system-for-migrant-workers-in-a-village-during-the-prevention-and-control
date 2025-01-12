package com.entity.view;

import com.entity.CaijishujuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 采集数据
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-14 15:56:35
 */
@TableName("caijishuju")
public class CaijishujuView  extends CaijishujuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public CaijishujuView(){
	}
 
 	public CaijishujuView(CaijishujuEntity caijishujuEntity){
 	try {
			BeanUtils.copyProperties(this, caijishujuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
