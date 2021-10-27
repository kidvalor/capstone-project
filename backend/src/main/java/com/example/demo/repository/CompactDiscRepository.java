package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository; 

import com.example.demo.model.CompactDisc;

@Repository
public interface CompactDiscRepository extends JpaRepository <CompactDisc, Long> {

}
