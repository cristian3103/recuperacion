module.exports = function (sequelize, dataType, dataTypes) {
    let alias = "pista";

    let cols = {
        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataType.STRING
        },
        genre_id: {
            type: dataTipes.INTEGER
        },
    }

    let config = {
        tableName: "cancion",
        timestamps: false,
    }

    let pista = sequelize.define(alias, cols, config);

    Cancion.associate = function (models) {
        Cancion.belongsTo(models.genero, {
            as: "genero",
            foreignKey: "genre_id",
        });

        Cancion.belongsToMany(models.artista); {
            Artista.hasMany(models.pista, {
                as: "pistas",
                through: "artista_pista",
                foreignKey: "artista_id",
            
                timestamps: false,
        
            });
        }
        return pista;
    }
}