/**
 * Created by web on 11/05/21.
 */

var nodeServer = require('./node_server');
var mongo = require('./db_connections/mongo_connection');
nodeServer.server;
mongo.mongoConnection();

