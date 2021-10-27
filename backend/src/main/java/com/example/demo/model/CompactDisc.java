package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity //used to mark the class as a persistent Java class.
@Table(name = "compact_disc") //is used to provide the details of the table that this entity will be mapped to

public class CompactDisc {
	 @Id //used to define the primary key.
	    @GeneratedValue(strategy = GenerationType.IDENTITY) // used to define the primary key generation strategy. 
	    private long id;
	 
	 @Column(name = "name")
	    private String name;

	    @Column //  used to define the properties of the column that will be mapped to the annotated field. 
	    (name = "artist") 
	    private String artist;

	    @Column(name = "album")
	    private String album;

	   
	    
	    public CompactDisc() {

	    }

		public CompactDisc(String name, String artist, String album) {
			super();
			this.name = name;
			this.artist = artist;
			this.album = album;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}
		
		

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getArtist() {
			return artist;
		}

		public void setArtist(String artist) {
			this.artist = artist;
		}

		public String getAlbum() {
			return album;
		}

		public void setAlbum(String album) {
			this.album = album;
		}

		


}