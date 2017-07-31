package com.bcmcgroup.flare.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * A Server.
 */
@Document(collection = "server")
public class Server implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    private String id;

    @NotNull
    @Field("server_name")
    private String serverName;

    @NotNull
    @Field("uri")
    private String uri;

    @Field("certificate_hash")
    private String certificateHash;

    @Field("services")
    private Object services;

    @Field("collections")
    private List collections;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getServerName() {
        return serverName;
    }

    public Server serverName(String serverName) {
        this.serverName = serverName;
        return this;
    }

    public void setServerName(String serverName) {
        this.serverName = serverName;
    }

    public String getUri() {
        return uri;
    }

    public Server uri(String uri) {
        this.uri = uri;
        return this;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getCertificateHash() {
        return certificateHash;
    }

    public Server certificateHash(String certificateHash) {
        this.certificateHash = certificateHash;
        return this;
    }

    public void setCertificateHash(String certificateHash) {
        this.certificateHash = certificateHash;
    }

    public Object getServices() {
        return services;
    }

    public void setServices(Object services) {
        this.services = services;
    }

    public List getCollections() {
        if (collections == null) {
            collections = new ArrayList(5);
        }
        return collections;
    }

    public void setCollections(List collections) {
        this.collections = collections;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Server server = (Server) o;
        if (server.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), server.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Server{" +
            "id='" + id + '\'' +
            ", serverName='" + serverName + '\'' +
            ", uri='" + uri + '\'' +
            ", certificateHash='" + certificateHash + '\'' +
            ", services=" + services +
            ", collections=" + collections +
            '}';
    }
}
