CREATE TABLE `domains` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`uid` varchar(36) NOT NULL,
	`name` varchar(20) NOT NULL,
	`is_active` BOOLEAN NOT NULL DEFAULT '1',
	`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`created_by` varchar(100) NOT NULL,
	`updated_at` DATETIME,
	`updated_by` varchar(100),
	PRIMARY KEY (`id`)
);

CREATE TABLE `currencies` (
	`id` varchar(3) NOT NULL,
	`name` varchar(20) NOT NULL,
	`symbol` varchar(10),
	PRIMARY KEY (`id`)
);

CREATE TABLE `projects` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`domain_id` INT NOT NULL,
	`name` varchar(20) NOT NULL,
	`description` TEXT,
	`budget` FLOAT,
	`currency` varchar(3) NOT NULL,
	`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`created_by` varchar(100) NOT NULL,
	`updated_at` DATETIME,
	`updated_by` varchar(100),
	PRIMARY KEY (`id`)
);

CREATE TABLE `projects_cost_centers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`project_id` INT NOT NULL,
	`name` varchar(20) NOT NULL,
	`budget` FLOAT,
	`parent_id` INT NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`)
);

CREATE TABLE `project_expenses` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`project_id` INT NOT NULL,
	`cost_center` INT NOT NULL,
	`date` DATETIME NOT NULL,
	`value` FLOAT NOT NULL DEFAULT '0',
	`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`created_by` varchar(100) NOT NULL,
	`updated_at` DATETIME,
	`updated_by` varchar(100),
	PRIMARY KEY (`id`)
);

ALTER TABLE `projects` ADD CONSTRAINT `projects_fk0` FOREIGN KEY (`domain_id`) REFERENCES `domains`(`id`);

ALTER TABLE `projects` ADD CONSTRAINT `projects_fk1` FOREIGN KEY (`currency`) REFERENCES `currencies`(`id`);

ALTER TABLE `projects_cost_centers` ADD CONSTRAINT `projects_cost_centers_fk0` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`);

ALTER TABLE `project_expenses` ADD CONSTRAINT `project_expenses_fk0` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`);

ALTER TABLE `project_expenses` ADD CONSTRAINT `project_expenses_fk1` FOREIGN KEY (`cost_center`) REFERENCES `projects_cost_centers`(`id`);
