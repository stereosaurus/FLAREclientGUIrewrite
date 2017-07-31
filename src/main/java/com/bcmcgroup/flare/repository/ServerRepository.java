package com.bcmcgroup.flare.repository;

import com.bcmcgroup.flare.domain.Server;
import org.springframework.stereotype.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Server entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ServerRepository extends MongoRepository<Server,String> {
    
}
