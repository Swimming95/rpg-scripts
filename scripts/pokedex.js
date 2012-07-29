/* Just initializing some structures*/
pokedex=new Array(649);


ExpGrowthChart=new Array(6);
for (var i=0;i<6;i++){
	ExpGrowthChart[i]=new Array(100);
}
var line,i

/* growth type,level,exp to reach that level*/
var allGrowthExp=sys.getFileContent("data/experience.csv").split("\n");
for (i=1;i<allGrowthExp.length){
	line=allGrowthExp[i].split(",");
	ExpGrowthChart[line[0]][line[1]-1]=line[2];
}

/*pokeID,base happiness*/
var allBaseHapiness=sys.getFileContent("data/pokemon_base_happiness.csv").split("\n");
for(i=1;i<allBaseHappiness.length;i++){
	line=allBaseHappiness.split(",");
	pokedex[line[0]].baseHappiness=line[1];
}

/*pokeID,growth type */
var allGrowthRates=sys.getFileContent("data/pokemon_growth_rate.csv").split("\n");
for(i=1;i<allGrowthRates.length;i++){
	line=allGrowthRates.split(",");
	pokedex[line[0]].growthRate=line[1];
}


/*
NEEDS TO BE RECONCILED WITH THE CORRECT POKEMON IDs
*/
/*pokeid,moveid,level,order (not used as it is sorted based on order)*/
var allLevelMoves=sys.getFileContent("data/pokemon_level_moves.csv").split("\n");
for(i=1;i<allLevelMoves.length;i++){
	line=allLevelMoves.split(",");
	if(pokedex[line[0]].levelupmoves==undefined){
		pokedex[line[0]].levelupmoves=new Array(100);
	}
	if(pokedex[line[0]].levelupmoves[line[2]]==undefined){
		pokedex[line[0]].levelupmoves[line[2]]=[]
	}
	pokedex[line[0]].levelupmoves[line[2]].push(line[1]);
}

/*pokeID,base Exp,HP,Atk,Def,Sp.Atk,Sp.Def,Spd,Form*/
var allValuesGiven=sys.getFileContent("data/pokemon_values_given.csv").split("\n");
for(i=1;i<allValuesGiven;i++){
	line=allValuesGiven.split(",");
	if(line.length=8){
		if(pokedex[line[0]].baseExp==undefined || pokedex[line[0]].evs==undefined){
			pokedex[line[0]].baseExp=[];
			pokedex[line[0]].evs=[]
		}
		pokedex[line[0]].baseExp.push(line[0]);
		pokedex[line[0]].evs.push(line.slice(2));
	}
	else{
		pokedex[line[0]].baseExp=line[1];
		pokedex[line[0]].evs=line.slice(2);
	}
}


/*
EVOLUTION DATA TO BE ADDED
*/


















