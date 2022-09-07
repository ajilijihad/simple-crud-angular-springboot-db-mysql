package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Departement;
import net.javaguides.springboot.repository.DepartementRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class DepartementController {

	@Autowired
	private DepartementRepository departementRepository;
	
	// get all departement
	@GetMapping("/departement")
	public List<Departement> getAllDepartement(){
		return departementRepository.findAll();
	}		
	@GetMapping("/departement/{id}")
	public ResponseEntity<Departement> getEmployeeById(@PathVariable Long id) {
		Departement departement = departementRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("departement not exist with id :" + id));
		return ResponseEntity.ok(departement);
	}
	
}
