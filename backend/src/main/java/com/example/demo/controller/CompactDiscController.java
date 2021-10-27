package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.CompactDisc;
import com.example.demo.repository.CompactDiscRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class CompactDiscController {
	
 @Autowired
 private CompactDiscRepository compactDiscRepository;
 
//get all tracks
 @GetMapping("/compact_disc")
 public List < CompactDisc > getAllMusic() {
     return compactDiscRepository.findAll();
 }
 
 // create tracks rest api
 @PostMapping("/compact_disc")
 public CompactDisc createMusic(@RequestBody CompactDisc track) {
     return compactDiscRepository.save(track);
 }
 
 // get tracks by id rest api
 @GetMapping("/compact_disc/{id}")
 public ResponseEntity < CompactDisc > getMusicById(@PathVariable Long id) {
      CompactDisc track = compactDiscRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Track does not exist" + id));
     return ResponseEntity.ok(track);
 }
 
//update tracks rest api

 @PutMapping("/compact_disc/{id}")
 public ResponseEntity < CompactDisc > updateMusic(@PathVariable Long id, @RequestBody CompactDisc trackDetails) {
     CompactDisc track =  compactDiscRepository.findById(id)
         .orElseThrow(() -> new ResourceNotFoundException("Track does not exist" + id));

     track.setName(trackDetails.getName());
     track.setArtist(trackDetails.getArtist());
     track.setAlbum(trackDetails.getAlbum());

     CompactDisc updatedMusic= compactDiscRepository.save(track);
     return ResponseEntity.ok(updatedMusic);
 }
 
 @DeleteMapping("/compact_disc/{id}")
 public ResponseEntity < Map < String, Boolean >> deleteMusic(@PathVariable Long id) {
     CompactDisc track = compactDiscRepository.findById(id)
         .orElseThrow(() -> new ResourceNotFoundException("Track does not exist:" + id));

     compactDiscRepository.delete(track);
     Map < String, Boolean > response = new HashMap < > ();
     response.put("deleted", Boolean.TRUE);
     return ResponseEntity.ok(response);
	}

}





