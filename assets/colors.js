export class colors{
    primaryColor,
    secondaryColor,
    backgroundColor

    colors(isDark) {
        let primary='#ffffff'
        let secondary='#000000'
        let background='#ffff'
        if(isDark){
            this.primaryColor = primaryColor;
        this.secondaryColor = secondaryColor;
        this.backgroundColor = backgroundColor;
        }
    }
    getPrimaryColor(){
        return this.primaryColor;
    }
    getSecondaryColor(){
        return this.secondaryColor;
    }
    getBackgroundColor(){
        return this.backgroundColor;
    }
}