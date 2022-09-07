package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_user;
	
	@Column(name = "user_name")
	private String userName;

	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;

	@Column(name = "id_departement")
	private String id_departement;

	@Column(name = "id_role")
	private String id_role;

	public Employee() {
		
	}
	
	public Employee(String userName, String email, String password,String id_departement,String id_role) {
		super();
		this.userName = userName;
		this.email = email;
		this.password = password;
		this.id_departement=id_departement;
		this.id_role=id_role;
	}

	public long getId_user() {
		return id_user;
	}

	public void setId_user(long id_user) {
		this.id_user = id_user;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getId_departement() {
		return id_departement;
	}

	public void setId_departement(String id_departement) {
		this.id_departement = id_departement;
	}

	public String getId_role() {
		return id_role;
	}

	public void setId_role(String id_role) {
		this.id_role = id_role;
	}
}
