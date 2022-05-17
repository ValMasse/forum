package com.m2iformation.forum.repositories;

import com.m2iformation.forum.models.Subject;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SubjectRepository extends MongoRepository<Subject, String> {
}
