package com.exampleDatah2.demoDatah2.controlle;

import com.exampleDatah2.demoDatah2.model.dto.employerDTO;
import com.exampleDatah2.demoDatah2.model.entitye.employer;
import com.exampleDatah2.demoDatah2.service.EmpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emp")
public class employerController {
    @Autowired
    private EmpService empService;

    @GetMapping("/get-emp")
    public employerDTO getUser(@RequestParam Integer id){
        return empService.getUser(id);
    }
    @PostMapping("/save-emp")
    public employerDTO saveUser(@RequestBody employer employerr){
        return employerDTO.toDTO(empService.save(employerr));
    }
    @PostMapping("/update-emp")
    public employer pdateUser(@RequestBody employer employerr){
        return empService.save(employerr);
    }
    @GetMapping("/delet-emp")
    public void deletUser(@RequestParam Integer id){
         empService.delet(id);
    }
    @GetMapping("/getall-emp")
    public List<employer> getAll (){
        return this.empService.getAll();
    }
}
