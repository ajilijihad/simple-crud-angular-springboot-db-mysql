package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "departement")
public class Departement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_departement;

	@Column(name = "nom_departement")
	private String nom_departement;
	
	public Departement() {
		
	}
	
	public Departement(String nom_departement) {
		super();
		this.nom_departement = nom_departement;
		
	}

	public long getId_departement() {
		return id_departement;
	}

	public void setId_departement(long id_departement) {
		this.id_departement = id_departement;
	}

	public String getNom_departement() {
		return nom_departement;
	}

	public void setNom_departement(String nom_departement) {
		this.nom_departement = nom_departement;
	}

}
