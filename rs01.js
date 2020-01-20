

/*
 * Code Snippets management
 * ---------------------------
 */


const FONT_SIZES=[8,10,12,14,16,18,20,22,24,30,36,48];
const DEFAULT_CODE_FONT_SIZE_INDEX = 4;

const CODE_FONT_SIZE_INDICES={};

function zoomInCode(codeId) {
	updateCodeSizeIndex(codeId,  codeFontSizeIndex(codeId) + 1) ;
}

function zoomOutCode(codeId) {
	updateCodeSizeIndex(codeId, codeFontSizeIndex(codeId) - 1 ) ;
}


function codeFontSizeIndex(codeId ){
	if ( CODE_FONT_SIZE_INDICES[codeId] == null ) {
		CODE_FONT_SIZE_INDICES[codeId]=DEFAULT_CODE_FONT_SIZE_INDEX ;
	}
	return CODE_FONT_SIZE_INDICES[codeId] ; 
}

function updateCodeSizeIndex(codeId , newSizeIndex ) {

	if( newSizeIndex >= FONT_SIZES.length ) {
		newSizeIndex = FONT_SIZES.length - 1 ;
	}
	else if( newSizeIndex < 0 ) {
		newSizeIndex = 0;
	}

	CODE_FONT_SIZE_INDICES[codeId] = newSizeIndex ;
	document.getElementById('code-' + codeId ).style.fontSize = '' + FONT_SIZES[newSizeIndex] +'px' ;
}