package com.exampleDatah2.demoDatah2.model.dto;

import com.exampleDatah2.demoDatah2.model.entitye.employer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class employerDTO {
    private Integer id;
    private String lastname;
    private String firstname;
    //private Double salary;

    public static employerDTO toDTO(employer entity){
        return  employerDTO.builder()
                .id(entity.getId())
                .firstname(entity.getFirstname())
                .lastname(entity.getLastname())
                .build();
    }
}
