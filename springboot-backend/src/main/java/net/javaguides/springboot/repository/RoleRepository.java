package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

}
