package com.bcmcgroup.flare.service;

import com.bcmcgroup.flare.domain.Server;
import com.bcmcgroup.flare.repository.ServerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Service Implementation for managing Server.
 */
@Service
public class ServerService {

    private final Logger log = LoggerFactory.getLogger(ServerService.class);

    private final ServerRepository serverRepository;

    public ServerService(ServerRepository serverRepository) {
        this.serverRepository = serverRepository;
    }

    /**
     * Save a server.
     *
     * @param server the entity to save
     * @return the persisted entity
     */
    public Server save(Server server) {
        log.debug("Request to save Server : {}", server);
        return serverRepository.save(server);
    }

    /**
     *  Get all the servers.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    public Page<Server> findAll(Pageable pageable) {
        log.debug("Request to get all Servers");
        return serverRepository.findAll(pageable);
    }

    /**
     *  Get one server by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    public Server findOne(String id) {
        log.debug("Request to get Server : {}", id);
        return serverRepository.findOne(id);
    }

    /**
     *  Delete the  server by id.
     *
     *  @param id the id of the entity
     */
    public void delete(String id) {
        log.debug("Request to delete Server : {}", id);
        serverRepository.delete(id);
    }


//    public String sendDiscoveryRequest(Server server) {
//        if (server == null) {
////            throw new NotFou
//            return "Error: Server object null.";
//        }
//        boolean useAuth = false;
//        if (server.getUsername() != null && !server.getUsername().isEmpty()) {
//            useAuth = true;
//        }
//        FlareResponse response = GuiServiceExecutor.configureServer(server.getName(), server.getUri(), useAuth, server.getUsername(), server.getPassword());
//
//        if (!response.success()) {
//            return response.toJsonString();
//        }
//
//        String serverJson = response.getDetailMessage();
//        Gson g = new Gson();
//        HashMap<String, Object> serverData = g.fromJson(serverJson, HashMap.class);
//
//
//        //TODO check that we're not overwriting existing services? Or don't bother and always overwrite with latest
//        server.setServices(serverData.get("services"));
//        server.setCertificateHash((String) serverData.get("certificateHash"));
//
//
//        List<String> newCollectionNames = new ArrayList<>();
//
//        Map<String, Object> collectionMap = (Map<String, Object>) serverData.get("collections");
//        //for each collection
//        for (String collectionName : collectionMap.keySet()) {
//            String mongoCollectionName = TaxiiCollection.getMongoCollectionName(server.getName(), collectionName);
//            //if doesn't already exist
//            if (!mongo.collectionExists(mongoCollectionName)) {//Todo also check if already in server's collection list?
//                Map collectionData = (Map) collectionMap.get(collectionName);
//
//                TaxiiCollection collection = new TaxiiCollection(mongoCollectionName, collectionData);
//
//                //Inserting to a MongoCollection creates it
//                mongo.insert(collection, mongoCollectionName);
//                newCollectionNames.add(mongoCollectionName);
//            }
//        }
//
//        server.getCollections().addAll(newCollectionNames);
//
//        mongo.save(server);
//
//        LOGGER.info("Successful discovery request");
//        return serverJson;
//    }
}
