package com.m2iformation.forum.config;

import com.m2iformation.forum.repositories.MessageRepository;
import com.m2iformation.forum.repositories.SubjectRepository;
import com.m2iformation.forum.services.impl.MessageService;
import com.m2iformation.forum.services.impl.SubjectService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;

@Configuration
public class BeanConfig {

    @Bean
    public ModelMapper modelMapper() {

        return new ModelMapper();
    }

    @Bean
    MessageService msgService(MessageRepository repo, ModelMapper modelMapper){
        return new MessageService(repo, modelMapper);
    }

    @Bean
    SubjectService subService(SubjectRepository repo, ModelMapper modelMapper){
        return new SubjectService(repo, modelMapper);
    }
}
