//package com.rdbaa.model;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.stereotype.Component;
//
//import java.util.List;
//import java.util.Map;
//
//@Component
//public class Day_of_week_for_weapon {
//
//    private final JdbcTemplate jdbcTemplate;
//
//    @Autowired
//    public Day_of_week_for_weapon(JdbcTemplate jdbcTemplate) {
//        this.jdbcTemplate = jdbcTemplate;
//    }
//
//    public String isDay(PointFromClient_weapon pointFromClient_weapon) {
//        String weaponName = pointFromClient_weapon.getName(); // Имя персонажа
//
//        String sql = "SELECT w.name AS WeaponName, d.days AS AcquisitionDate " +
//                "FROM weapons w " +
//                "JOIN upping_level_of_weapon up ON w.id = up.id_weapon " +
//                "JOIN level_of_weapon lw ON up.id_level_of_weapon = lw.id " +
//                "JOIN resources r ON lw.id_resources = r.id " +
//                "JOIN dungeon dn ON r.id_dungeon = dn.id " +
//                "JOIN getting_resources gr ON r.id = gr.id_resources " +
//                "JOIN date d ON gr.id_date = d.id " +
//                "WHERE w.name = ?";
//
//        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, weaponName);
//
//        for (Map<String, Object> row : rows) {
//            System.out.println("Weapon: " + row.get("WeaponName") + ", AcquisitionDate: " + row.get("AcquisitionDate"));
//        }
//
//        if (!rows.isEmpty()) {
//            Map<String, Object> result = rows.get(0);
//            return (String) result.get("AcquisitionDate");
//        } else {
//            return "Данные о дате получения не найдены";
//        }
//    }
//}
