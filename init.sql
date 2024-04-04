drop index if EXISTS LIKER2_FK;

drop index if EXISTS LIKER_FK;

drop index if EXISTS LIKER_PK;

drop table if EXISTS LIKER;

drop index if EXISTS POSTER_FK;

drop index if EXISTS TWEET_PK;

drop table if EXISTS TWEET;

drop index if EXISTS UTILISATEUR_PK;

drop table if EXISTS UTILISATEUR;

create table LIKER (
   IDUTILISATEUR        INT4                 not null,
   IDTWEET              INT4                 not null,
   constraint PK_LIKER primary key (IDUTILISATEUR, IDTWEET)
);

create unique index LIKER_PK on LIKER (
IDUTILISATEUR,
IDTWEET
);


create  index LIKER_FK on LIKER (
IDUTILISATEUR
);


create  index LIKER2_FK on LIKER (
IDTWEET
);

create table TWEET (
   IDTWEET              SERIAL               not null,
   IDUTILISATEUR        INT4                 not null,
   MESSAGETWEET         VARCHAR(280)         null,
   NBVUE                INT4                 null,
   constraint PK_TWEET primary key (IDTWEET)
);

create unique index TWEET_PK on TWEET (
IDTWEET
);

create  index POSTER_FK on TWEET (
IDUTILISATEUR
);


create table UTILISATEUR (
   IDUTILISATEUR        SERIAL               not null,
   PSEUDOUTILISATEUR    VARCHAR(20)          null,
   MDPUTILISATEUR       VARCHAR(20)          null,
   MAILUTILISATEUR      VARCHAR(30)          null,
   constraint PK_UTILISATEUR primary key (IDUTILISATEUR)
);

create unique index UTILISATEUR_PK on UTILISATEUR (
IDUTILISATEUR
);

alter table LIKER
   add constraint FK_LIKER_LIKER_UTILISAT foreign key (IDUTILISATEUR)
      references UTILISATEUR (IDUTILISATEUR)
      on delete restrict on update restrict;

alter table LIKER
   add constraint FK_LIKER_LIKER2_TWEET foreign key (IDTWEET)
      references TWEET (IDTWEET)
      on delete restrict on update restrict;

alter table TWEET
   add constraint FK_TWEET_POSTER_UTILISAT foreign key (IDUTILISATEUR)
      references UTILISATEUR (IDUTILISATEUR)
      on delete restrict on update restrict;

-- Insertion de données dans la table TWEET
INSERT INTO UTILISATEUR (PSEUDOUTILISATEUR, MDPUTILISATEUR, MAILUTILISATEUR) 
VALUES 
    ('utilisateur1', 'motdepasse1', 'utilisateur1@example.com'),
    ('utilisateur2', 'motdepasse2', 'utilisateur2@example.com'),
    ('utilisateur3', 'motdepasse3', 'utilisateur3@example.com');

-- Insertion de données dans la table TWEET
INSERT INTO TWEET (IDUTILISATEUR, MESSAGETWEET, NBVUE) 
VALUES 
    (1, 'Premier tweet de l''utilisateur 1', 10),
    (2, 'Un autre tweet de l''utilisateur 2', 15),
    (3, 'Troisième tweet de l''utilisateur 3', 20);

-- Insertion de données dans la table LIKER
INSERT INTO LIKER (IDUTILISATEUR, IDTWEET) 
VALUES 
    (1, 2), -- Utilisateur 1 aime le tweet 2
    (2, 1), -- Utilisateur 2 aime le tweet 1
    (3, 3); -- Utilisateur 3 aime le tweet 3


