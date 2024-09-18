//package com.lab_4.model;
//
//import org.springframework.stereotype.Component;
//
//@Component
//public class Day_of_week {
//    public String isDay(PointFromClient pointFromClient) {
//        String characterName = "Странник"; // Имя персонажа
//
////        String characterName = pointFromClient.getName();
//
//        String acquisitionDate = ""; // Дата получения
//
//
//
//
//        return acquisitionDate;
//    }
//
//}

package com.rdbaa.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class Day_of_week {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public Day_of_week(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public String isDay(PointFromClient pointFromClient) {
        String characterName = pointFromClient.getName(); // Имя персонажа

        String sql = "SELECT c.Name AS CharacterName, d.Days AS AcquisitionDate " +
                "FROM Character c " +
                "JOIN Resources_for_talents rt ON c.id_talents = rt.id_resources " +
                "JOIN Resources r ON rt.id_resources = r.id " +
                "JOIN Dungeon dn ON r.id_dungeon = dn.id " +
                "JOIN Getting_Resources gr ON r.id = gr.id_resources " +
                "JOIN Date d ON gr.id_date = d.id " +
                "WHERE c.Name = ?";

        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, characterName);

        for (Map<String, Object> row : rows) {
            System.out.println("Character: " + row.get("CharacterName") + ", AcquisitionDate: " + row.get("AcquisitionDate"));
        }

        if (!rows.isEmpty()) {
            Map<String, Object> result = rows.get(0);
            return (String) result.get("AcquisitionDate");
        } else {
            return "Данные о дате получения не найдены";
        }
    }
}
