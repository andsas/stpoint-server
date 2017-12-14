/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.pp.stpoint.service;

import com.pp.stpoint.entity.Value;
import java.util.Collection;

/**
 *
 * @author André Santos
 */
public interface ValueService {
    Value save(Value value);
    Value update(Value value, Long id);
    void remove(Long id);
    Value find(Long id);
    Collection<Value> all();
}
