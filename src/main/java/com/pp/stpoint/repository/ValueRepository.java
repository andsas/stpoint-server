package com.pp.stpoint.repository;

import com.pp.stpoint.entity.Value;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author André Santos
 */
public interface ValueRepository extends JpaRepository<Value, Long>{
    
}
