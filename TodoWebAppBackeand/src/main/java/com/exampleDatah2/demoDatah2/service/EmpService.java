package com.exampleDatah2.demoDatah2.service;

import com.exampleDatah2.demoDatah2.model.dto.employerDTO;
import com.exampleDatah2.demoDatah2.model.entitye.employer;
import com.exampleDatah2.demoDatah2.model.repositore.EmRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class EmpService {
    @Autowired
    private EmRepo emRepo;

    public employerDTO getUser(Integer id){
        Optional<employer> emp = this.emRepo.findById(id);
        // return emp.orElse(null);
        //return emp.orElse(new employer());
        if (emp.isPresent())
            return employerDTO.toDTO(emp.get());
        else
            return null;

    }

    public employer save(employer employerr){
        return this.emRepo.save(employerr);

    }

    public void delet(Integer id) {
        this.emRepo.deleteById(id);
    }

    public List<employer> getAll() {
        return this.emRepo.findAll();
    }
}
