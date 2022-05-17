package com.m2iformation.forum.repositories;

import com.m2iformation.forum.models.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepository extends MongoRepository<Message, String> {
}
