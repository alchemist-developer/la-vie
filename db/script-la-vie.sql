CREATE DATABASE `la-vie-atualizada`;
USE `la-vie-atualizada` ;

-- -----------------------------------------------------
-- Table `la-vie-atualizada`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la-vie-atualizada`.`pacientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `idade` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `la-vie`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la-vie-atualizada`.`psicologos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(500) NOT NULL,
  `apresentacao` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `la-vie`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la-vie-atualizada`.`atendimentos` (
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
    REFERENCES `la-vie-atualizada`.`pacientes` (`id`),
  CONSTRAINT `atendimentos_ibfk_2`
    FOREIGN KEY (`psicologos_paciente`)
    REFERENCES `la-vie`.`psicologos` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
