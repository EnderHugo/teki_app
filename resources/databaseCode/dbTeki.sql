DROP DATABASE if EXISTS dbTeki;

create database IF NOT EXISTS dbTeki;

use dbTeki;

-- tipos

CREATE TABLE IF NOT EXISTS `tbUsuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(220) NOT NULL,
  `email` varchar(520) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `tbPessoal` (
  `idPessoal` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `sobre` varchar(520) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_Pessoal FOREIGN KEY (`idPessoal`) REFERENCES tbUsuario(`idUsuario`),
  PRIMARY KEY (`idPessoal`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `tbPrestServ` (
  `idPrestServ` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `qualificacoes` varchar(220) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `endereco` varchar(220) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_PrestServ FOREIGN KEY (`idPrestServ`) REFERENCES tbUsuario(`idUsuario`),
  PRIMARY KEY (`idPrestServ`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `tbEmpresarial` (
  `idEmpresarial` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `CNPJ` varchar(14) NOT NULL,
  `endereco` varchar(220) NOT NULL,
  `razao_soc` varchar(220) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_Empresarial FOREIGN KEY (`idEmpresarial`) REFERENCES tbUsuario(`idUsuario`),
  PRIMARY KEY (`idEmpresarial`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- Grupo

CREATE TABLE IF NOT EXISTS `tbGrupo` (
  `idGrupo` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(220) NOT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (`idGrupo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `tbIntGrupo` (
  `idIntGrupo` int(11) NOT NULL AUTO_INCREMENT,
  `idPrestServ` int(11) NOT NULL,
  `idGrupo` int(11) NOT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_IntGrupoPrest FOREIGN KEY (`idPrestServ`) REFERENCES tbPrestServ(`idPrestServ`),
  CONSTRAINT fk_IntGrupo FOREIGN KEY (`idGrupo`) REFERENCES tbGrupo(`idGrupo`),
  PRIMARY KEY (`idIntGrupo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `tbAdmGrupo` (
  `idAdmGrupo` int(11) NOT NULL AUTO_INCREMENT,
  `idPrestServ` int(11) NOT NULL,
  `idGrupo` int(11) NOT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_AdmGrupoPrest FOREIGN KEY (`idPrestServ`) REFERENCES tbPrestServ(`idPrestServ`),
  CONSTRAINT fk_AdmGrupo FOREIGN KEY (`idGrupo`) REFERENCES tbGrupo(`idGrupo`),
  PRIMARY KEY (`idAdmGrupo`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- tags

CREATE TABLE IF NOT EXISTS `tbEspecializacao` (
  `idEsp` int(11) NOT NULL AUTO_INCREMENT,
  `idPrestServ` int(11) NOT NULL,
  `idTag` int(11) NOT NULL,
  `endereco` varchar(220) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  
  CONSTRAINT fk_EspServ FOREIGN KEY (`idPrestServ`) REFERENCES tbPrestServ(`idPrestServ`),
  CONSTRAINT fk_EspTag FOREIGN KEY (`idTag`) REFERENCES tbTags(`idTag`),
  PRIMARY KEY (`idEsp`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `tbTags` (
  `idTag` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(220) NOT NULL,
  `desc` varchar(220) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`idTag`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- registros

CREATE TABLE IF NOT EXISTS `tbRegistrosServ` (
  `idAtendimento` int(11) NOT NULL AUTO_INCREMENT,
  `idPrestador` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `valor` DOUBLE(11, 2) NOT NULL,
  `dataAgnd` DATETIME NOT NULL,
  `dataAtnd` DATETIME NOT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_RegistrosPrestador FOREIGN KEY (`idPrestador`) REFERENCES tbPrestServ(`idPrestServ`),
  CONSTRAINT fk_RegistrosCliente FOREIGN KEY (`idCliente`) REFERENCES tbCliente(`idCliente`),
  PRIMARY KEY (`idAtendimento`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `tbRegistrosEmp` (
  `idAtendimento` int(11) NOT NULL AUTO_INCREMENT,
  `idGrupo` int(11) NOT NULL,
  `idEmpresa` int(11) NOT NULL,
  `valor` DOUBLE(11, 2) NOT NULL,
  `dataAgnd` DATETIME NOT NULL,
  `dataAtnd` DATETIME NOT NULL,
  `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

  CONSTRAINT fk_RegistrosGrupo FOREIGN KEY (`idGrupo`) REFERENCES tbGrupo(`idGrupo`),
  CONSTRAINT fk_RegistrosEmpresa FOREIGN KEY (`idEmpresa`) REFERENCES tbEmpresarial(`idEmpresarial`),
  PRIMARY KEY (`idAtendimento`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


