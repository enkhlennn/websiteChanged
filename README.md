# websiteChanged

CREATE TABLE `accounts` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `column_6` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

//Hiisen oorchloltuud: Register ajilluulsan, Login ajilluulsan, Burtgeltei hereglegchdiig haruuldag admin tsonh hiisen, Contact tsonhond uurchlult oruulsan.
