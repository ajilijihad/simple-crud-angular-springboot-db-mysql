package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Role")
public class Role {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_role;


	@Column(name = "nom_role")
	private String nom_role;

	public Role() {
		
	}
	
	public Role(String nom_role) {
		super();
		this.nom_role = nom_role;
		
	}


}
