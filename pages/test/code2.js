/*
 * Fonctions pour gérer la géométrie 3D
 */

function vect (x,y,z) {
    return {"x" : x , "y" : y , "z" : z } ;
}

function scalProd(v1,v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z ;
}

function vectProd(v1,v2) {
    return vect ( v1.y * v2.z - v1.z * v2.y , v1.z * v2.x - v1.x * v2.z , v1.x * v2.y - v1.y * v2.x ) ;
}

function vLength(v) {
    return Math.sqrt( scalProd(v,v) ) ;
}

function scale(coef,v) {
    return vect ( coef*v.x , coef * v.y , coef * v.z ) ;
}

function normalize( v) {
    var coef = 1.0 / vLength (v) ;
    return scale ( coef , v) ;
}