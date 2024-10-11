create table Date
(
    id serial primary key,
    Days varchar(64)
);

create table Dungeon
(
    id serial primary key,
    Name varchar(32) not null,
    Region varchar(16) not null
);

create table Getting_Resources
(
    id_date integer references Date on delete cascade on update cascade not null,
    id_resources integer references Resources on delete cascade on update cascade not null
);

create table Resources
(
    id serial primary key,
    Name varchar(32),
    id_dungeon integer references Dungeon on delete cascade on update cascade not null
);

create table Character
(
    id serial primary key,
    Name varchar(16) not null,
    Rare integer check (rare = 4 or rare = 5),
    Element varchar(8) not null,
    Type_of_Weapon varchar(16) not null,
    id_talents integer references Resources_for_talents on delete cascade on update cascade not null
);

create table Resources_for_talents(
    id serial primary key,
    id_resources integer references Resources on delete cascade on update cascade not null
);

create table Level_of_Weapon
(
    id serial primary key,
    id_resources integer references Resources on delete cascade on update cascade not null
);

create table Weapons
(
    id serial primary key,
    Name varchar(32) not null,
    Rare integer check ( rare > 0 and rare <= 5 ) DEFAULT 0,
    Type_of_weapon varchar(16) not null
);

create table Upping_level_of_Weapon
(
    id_weapon integer references Weapons on delete cascade on update cascade not null,
    id_level_of_weapon integer references Level_of_Weapon on delete cascade on update cascade not null
);
