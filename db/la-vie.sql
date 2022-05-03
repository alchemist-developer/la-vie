SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema la-vie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema la-vie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `la-vie` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `la-vie` ;

-- -----------------------------------------------------
-- Table `la-vie`.`paciente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la-vie`.`paciente` (
  `id_paciente` INT NOT NULL AUTO_INCREMENT,
  `nome_paciente` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `idade` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id_paciente`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la-vie`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la-vie`.`psicologos` (
  `id_psicologos` INT NOT NULL AUTO_INCREMENT,
  `nome_psicologo` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha_psicologo` VARCHAR(255) NOT NULL,
  `apresentacao` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id_psicologos`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la-vie`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la-vie`.`atendimentos` (
  `atendimentos_id` INT NOT NULL AUTO_INCREMENT,
  `data_atendimento` DATE NOT NULL,
  `paciente_psicologos` INT NOT NULL,
  `psicologos_paciente` INT NOT NULL,
  `observacao` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`atendimentos_id`),
  INDEX `paciente_psicologos` (`paciente_psicologos` ASC) VISIBLE,
  INDEX `psicologos_paciente` (`psicologos_paciente` ASC) VISIBLE,
  CONSTRAINT `atendimentos_ibfk_1`
    FOREIGN KEY (`paciente_psicologos`)
    REFERENCES `la-vie`.`paciente` (`id_paciente`),
  CONSTRAINT `atendimentos_ibfk_2`
    FOREIGN KEY (`psicologos_paciente`)
    REFERENCES `la-vie`.`psicologos` (`id_psicologos`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;