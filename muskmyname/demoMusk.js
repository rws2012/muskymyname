/*
Demo one for Musk name hackathon project 5/9/2020
*/

 
 
//var username = prompt("What is your name?");
window.onload=function(){
    const button = document.getElementById("generate");
    const output = document.getElementById("output");
    const name = document.getElementById("fname");

    function generate_musk_name(fname)
{
        //check that the input is a string;
        //assert.strictEqual(typeof input === "string");
        console.log(fname)
        if(fname === "Kyle" || fname === "kyle")
        {
            fname = kyle_check(fname);
        }
        else{
        fname = greek_letters_replace(fname)
        fname = special_chars_replacement(fname)

        //put hashes in between the chars
        fname = fname.split('').join(' ');
        fname = generate_new_string(fname)

        fname = letter_to_place_in_alphabet(fname)
        console.log("Fname after letter_to_place in alphabet before the end and begin edits is " + fname)
       
        fname = letter_to_place_in_alphabet_last_letter(fname)
        console.log("fname after last letter edit for letter_to_place_in_alphabet : " + fname)
       
        if(fname.substring(0,2) != "A-")
        {
            //checks if the first letter has already been changed so that another change does not happen
            fname = letter_to_place_in_alphabet_first_letter(fname)
            console.log("fname after first letter edit for letter_to_place_in_alphabet : " + fname)
        }
        
    }
         
        //const output = document.getElementById("output");
        output.innerHTML = fname
    
}
 
    //function which will turn letters into greek letter
    //assert for strings happens in the generate_musk_name function
    function greek_letters_replace(input)
    {
        //for Ky to chi   - could do ki to chi too maybe
        var regex = /[K|k][Y|y]/;
        input = input.replace(regex, '\u03C7')
        regex = /[C|c][H|h][I|i]/;
        input = input.replace(regex, '\u03C7')
    
        //for pi to pi
        regex = /[P|p][I|i]/;
        input = input.replace(regex, '\u03C0')
    
        //for ro to RHO 
        regex = /[R|r][O|o]/;
        input = input.replace(regex, '\u03A1')
        regex = /[R|r][H|h][O|o]/;
    
        //for fi in fiona and fee to phi, phi to phi
        regex = /[F|f][I|i]/;
        input = input.replace(regex,    '\u03A6')
        regex = /[F|f][E|e][E|e]/;
        input = input.replace(regex,    '\u03A6')
        regex = /[P|p][H|h][I|i]/;
        input = input.replace(regex,    '\u03A6')
    
        //for mu to mu
        regex = /[M|m][U|u]/;
        input = input.replace(regex,    '\u03BC')
        //console.log(input)

        return input;
    
    }
    
    function letter_to_place_in_alphabet(input)
    {   
        var regex = /((?<=\s)[A|a](?=\s))/;
        input = input.replace(regex,'A-1')
    
        regex = /((?<=\s)[B|b](?=\s))/;
        input =input.replace(regex, 'A-2')
    
        regex = /((?<=\s)[C|c](?=\s))/;
        input =input.replace(regex, 'A-3')
    
        regex = /((?<=\s)[D|d](?=\s))/;
        input =input.replace(regex, 'A-4')
    
        regex = /((?<=\s)[E|e](?=\s))/;
        input =input.replace(regex, 'A-5')
    
        regex = /((?<=\s)[F|f](?=\s))/;
        input =input.replace(regex, 'A-6')
    
        regex = /(?<=\s)[G|g](?=\s)/;
        input =input.replace(regex, 'A-7')
    
        regex = /(?<=\s)[H|h](?=\s)/;
        input =input.replace(regex, 'A-8')
    
        regex = /(?<=\s)[I|i](?=\s)/;
        input =input.replace(regex, 'A-9')
    
        regex = /(?<=\s)[J|j](?=\s)/;
        input =input.replace(regex, 'A-10')
    
        regex = /(?<=\s)[K|k](?=\s)/;
        input =input.replace(regex, 'A-11')
    
        regex = /(?<=\s)[L|l](?=\s)/;
        input =input.replace(regex, 'A-12')
    
        regex = /(?<=\s)[M|m](?=\s)/;
        input =input.replace(regex, 'A-13')
    
        regex = /(?<=\s)[N|n](?=\s)/;
        input =input.replace(regex, 'A-14')
    
        regex = /(?<=\s)[O|o](?=\s)/;
        input =input.replace(regex, 'A-15')
    
        regex = /(?<=\s)[P|p](?=\s)/;
        input =input.replace(regex, 'A-16')
    
        regex = /(?<=\s)[Q|q](?=\s)/;
        input =input.replace(regex, 'A-17')
    
        regex = /[R|r]/;
        input =input.replace(regex, 'A-18')
    
        regex = /(?<=\s)[S|s](?=\s)/;
        input =input.replace(regex, 'A-19')
    
        regex = /(?<=\s)[T|t](?=\s)/;
        input =input.replace(regex, 'A-20')
    
        regex = /(?<=\s)[U|u](?=\s)/;
        input =input.replace(regex, 'A-21')
    
        regex = /(?<=\s)[V|v](?=\s)/;
        input =input.replace(regex, 'A-22')
    
        regex = /(?<=\s)[W|w](?=\s)/;
        input =input.replace(regex, 'A-23')
    
        regex = /(?<=\s)[x|X](?=\s)/;
        input =input.replace(regex, 'A-24')
    
        regex = /(?<=\s)[Y|y](?=\s)/;
        input =input.replace(regex, 'A-25')
    
        regex = /(?<=\s)[Z|z](?=\s)/;
        input = input.replace(regex, 'A-26')
        //console.log(input)

        return input;
    }

    function letter_to_place_in_alphabet_last_letter(input)
    {   
        var regex = /((?<=\s)[A|a]$)/;
        input = input.replace(regex,'A-1')
    
        regex = /((?<=\s)[B|b]$)/;
        input =input.replace(regex, 'A-2')
    
        regex = /((?<=\s)[C|c]$)/;
        input =input.replace(regex, 'A-3')
    
        regex = /((?<=\s)[D|d]$)/;
        input =input.replace(regex, 'A-4')
    
        regex = /((?<=\s)[E|e]$)/;
        input =input.replace(regex, 'A-5')
    
        regex = /((?<=\s)[F|f]$)/;
        input =input.replace(regex, 'A-6')
    
        regex = /(?<=\s)[G|g]$/;
        input =input.replace(regex, 'A-7')
    
        regex = /(?<=\s)[H|h]$/;
        input =input.replace(regex, 'A-8')
    
        regex = /(?<=\s)[I|i]$/;
        input =input.replace(regex, 'A-9')
    
        regex = /(?<=\s)[J|j]$/;
        input =input.replace(regex, 'A-10')
    
        regex = /(?<=\s)[K|k]$/;
        input =input.replace(regex, 'A-11')
    
        regex = /(?<=\s)[L|l]$/;
        input =input.replace(regex, 'A-12')
    
        regex = /(?<=\s)[M|m]$/;
        input =input.replace(regex, 'A-13')
    
        regex = /(?<=\s)[N|n]$/;
        input =input.replace(regex, 'A-14')
    
        regex = /(?<=\s)[O|o]$/;
        input =input.replace(regex, 'A-15')
    
        regex = /(?<=\s)[P|p]$/;
        input =input.replace(regex, 'A-16')
    
        regex = /(?<=\s)[Q|q]$/;
        input =input.replace(regex, 'A-17')
    
        regex = /(?<=\s)[R|r]$/;
        input =input.replace(regex, 'A-18')
    
        regex = /(?<=\s)[S|s]$/;
        input =input.replace(regex, 'A-19')
    
        regex = /(?<=\s)[T|t]$/;
        input =input.replace(regex, 'A-20')
    
        regex = /(?<=\s)[U|u]$/;
        input =input.replace(regex, 'A-21')
    
        regex = /(?<=\s)[V|v]$/;
        input =input.replace(regex, 'A-22')
    
        regex = /(?<=\s)[W|w]$/;
        input =input.replace(regex, 'A-23')
    
        regex = /(?<=\s)[x|X]$/;
        input =input.replace(regex, 'A-24')
    
        regex = /(?<=\s)[Y|y]$/;
        input =input.replace(regex, 'A-25')
    
        regex = /(?<=\s)[Z|z]$/;
        input = input.replace(regex, 'A-26')
        //console.log(input)

        return input;
    }

    function kyle_check(input)
{
   if(input === "Kyle" || input == "kyle")
   {
       //middle unicode is for Æ
       input =  '\u03C7' + " \u00C6" + "A-12";
   }
   return input;
}

function letter_to_place_in_alphabet_first_letter(input)
    {   
        var regex = /(^[A|a])/;
        input = input.replace(regex,'A-1')
    
        regex = /(^[B|b])/;
        input =input.replace(regex, 'A-2')
    
        regex = /(^[C|c])/;
        input =input.replace(regex, 'A-3')
    
        regex = /(^[D|d])/;
        input =input.replace(regex, 'A-4')
    
        regex = /(^[E|e])/;
        input =input.replace(regex, 'A-5')
    
        regex = /(^[F|f])/;
        input =input.replace(regex, 'A-6')
    
        regex = /(^[G|g])/;
        input =input.replace(regex, 'A-7')
    
        regex = /^[H|h]/;
        input =input.replace(regex, 'A-8')
    
        regex = /^[I|i]/;
        input =input.replace(regex, 'A-9')
    
        regex = /^[J|j]/;
        input =input.replace(regex, 'A-10')
    
        regex = /^[K|k]/;
        input =input.replace(regex, 'A-11')
    
        regex = /^[L|l]/;
        input =input.replace(regex, 'A-12')
    
        regex = /^[M|m]/;
        input =input.replace(regex, 'A-13')
    
        regex = /^[N|n]/;
        input =input.replace(regex, 'A-14')
    
        regex = /^[O|o]/;
        input =input.replace(regex, 'A-15')
    
        regex = /^[P|p]/;
        input =input.replace(regex, 'A-16')
    
        regex = /^[Q|q]/;
        input =input.replace(regex, 'A-17')
    
        regex = /^[R|r]/;
        input =input.replace(regex, 'A-18')
    
        regex = /^[S|s]/;
        input =input.replace(regex, 'A-19')
    
        regex = /^[T|t]/;
        input =input.replace(regex, 'A-20')
    
        regex = /^[U|u]/;
        input =input.replace(regex, 'A-21')
    
        regex = /^[V|v]/;
        input =input.replace(regex, 'A-22')
    
        regex = /^[W|w]/;
        input =input.replace(regex, 'A-23')
    
        regex = /^[x|X]/;
        input =input.replace(regex, 'A-24')
    
        regex = /^[Y|y]/;
        input =input.replace(regex, 'A-25')
    
        regex = /^[Z|z]/;
        input = input.replace(regex, 'A-26')
        //console.log(input)

        return input;
    }

    function kyle_check(input)
{
   if(input === "Kyle" || input == "kyle")
   {
       //middle unicode is for Æ
       input =  '\u03C7' + " \u00C6" + "A-12";
   }
   return input;
}

function letter_to_Hex(input, boolean_reference_instance)
{
    console.log("temp_object.bool_value in letter_to_Hex should be false : "+ boolean_reference_instance.bool_value)
    var regex = /[A]/;
    if(Math.random() < 0.405)
    {
    input = input.replace(regex,'41')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
    regex = /[B]/;
    input =input.replace(regex, '42')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
    regex = /[C]/;
    input =input.replace(regex, '43')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
    regex = /[D]/;
    input =input.replace(regex, '44')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
    regex = /[E]/;
    input =input.replace(regex, '45')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
    regex = /[F]/;
    input =input.replace(regex, '46')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
    regex = /[G]/;
    input =input.replace(regex, '47')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[H]/;
    input =input.replace(regex, '48')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[I]/;
    input =input.replace(regex, '49')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.60)
    {
    regex = /[J]/;
    input =input.replace(regex, '4A')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.60)
    {
    regex = /[K]/;
    input =input.replace(regex, '4B')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.60)
    {
    regex = /[L]/;
    input =input.replace(regex, '4C')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.80)
    {
    regex = /[M]/;
    input =input.replace(regex, '4D')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.80)
    {
    regex = /[N]/;
    input =input.replace(regex, '4E')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.8)
    {
    regex = /[O]/;
    input =input.replace(regex, '4F')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[P]/;
    input =input.replace(regex, '50')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[Q]/;
    input =input.replace(regex, '51')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[R]/;
    input =input.replace(regex, '52')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[S]/;
    input =input.replace(regex, '53')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[T]/;
    input =input.replace(regex, '54')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[U]/;
    input =input.replace(regex, '55')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[V]/;
    input =input.replace(regex, '56')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[W]/;
    input =input.replace(regex, '57')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[x]/;
    input =input.replace(regex, '58')
    boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
    regex = /[Y]/;
    input =input.replace(regex, '59')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.80)
    {
    regex = /[Z]/;
    input = input.replace(regex, '5A')
    boolean_reference_instance.bool_value.bool_value = true;
    }
    
    //now the lowercase letters
    if(Math.random() < 0.30)
    {
        regex = /[a]/;
        input = input.replace(regex,'61')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[b]/;
        input =input.replace(regex, '62')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[c]/;
        input =input.replace(regex, '63')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[d]/;
        input =input.replace(regex, '64')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[e]/;
        input =input.replace(regex, '65')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[f]/;
        input =input.replace(regex, '66')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[g]/;
        input =input.replace(regex, '67')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[h]/;
        input =input.replace(regex, '68')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[i]/;
        input =input.replace(regex, '69')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.50)
    {
        regex = /[j]/;
        input =input.replace(regex, '6A')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.60)
    {
        regex = /[k]/;
        input =input.replace(regex, '6B')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.60)
    {
        regex = /[l]/;
        input =input.replace(regex, '6C')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.60)
    {
        regex = /[m]/;
        input =input.replace(regex, '6D')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.60)
    {
        regex = /[n]/;
        input =input.replace(regex, '6E')
        boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.75)
    {
        regex = /[o]/;
        input =input.replace(regex, '6F')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[p]/;
        input =input.replace(regex, '70')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[q]/;
        input =input.replace(regex, '71')
        boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[r]/;
        input =input.replace(regex, '72')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[s]/;
        input =input.replace(regex, '73')
        boolean_reference_instance.bool_value.bool_value = true;
    }
        
    if(Math.random() < 0.30)
    {
        regex = /[t]/;
        input =input.replace(regex, '74')
        boolean_reference_instance.bool_value.bool_value = true;
    }
       
    if(Math.random() < 0.30)
    {
        regex = /[u]/;
        input =input.replace(regex, '75')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[v]/;
        input =input.replace(regex, '76')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[w]/;
        input =input.replace(regex, '77')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[x]/;
        input =input.replace(regex, '78')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[y]/;
        input =input.replace(regex, '79')
        boolean_reference_instance.bool_value.bool_value = true;
    }
    
    if(Math.random() < 0.80)
    {
        regex = /[z]/;
        input = input.replace(regex, '7A')
        boolean_reference_instance.bool_value.bool_value = true;
    }
        //console.log(input)

        return input;
}

function letter_to_Binary(input, boolean_reference_instance)
{
    console.log("temp_object.bool_value in letter_to_Binary should be false : "+ boolean_reference_instance.bool_value)
    var regex = /[A]/;
    if(Math.random() < 0.30)
    {
    input = input.replace(regex,'01000001')
    boolean_reference_instance.bool_value.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[B]/;
    input =input.replace(regex, '01000010')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[C]/;
    input =input.replace(regex, '01000011')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[D]/;
    input =input.replace(regex, '01000100')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[E]/;
    input =input.replace(regex, '01000101')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[F]/;
    input =input.replace(regex, '01000110')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[G]/;
    input =input.replace(regex, '01000111')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[H]/;
    input =input.replace(regex, '01001000')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[I]/;
    input =input.replace(regex, '01001001')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[J]/;
    input =input.replace(regex, '01001010')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[K]/;
    input =input.replace(regex, '01001011')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[L]/;
    input =input.replace(regex, '01001100')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[M]/;
    input =input.replace(regex, '01001101')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[N]/;
    input =input.replace(regex, '01001110')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[O]/;
    input =input.replace(regex, '01001111')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[P]/;
    input =input.replace(regex, '01010000')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[Q]/;
    input =input.replace(regex, '01010001')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[R]/;
    input =input.replace(regex, '01010010')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[S]/;
    input =input.replace(regex, '01010011')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[T]/;
    input =input.replace(regex, '01010100')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[U]/;
    input =input.replace(regex, '01010101')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[V]/;
    input =input.replace(regex, '01010110')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[W]/;
    input =input.replace(regex, '01010111')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[x]/;
    input =input.replace(regex, '01011000')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[Y]/;
    input =input.replace(regex, '01011001')
    boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
    regex = /[Z]/;
    input = input.replace(regex, '01011010')
    boolean_reference_instance.bool_value = true;
    }
    
    //now the lowercase letters
    if(Math.random() < 0.30)
    {
        regex = /[a]/;
        input = input.replace(regex,'01100001')
        boolean_reference_instance.bool_value = true;
    }
    
    if(Math.random() < 0.30)
    {
        regex = /[b]/;
        input =input.replace(regex, '01100010')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
        regex = /[c]/;
        input =input.replace(regex, '01100011')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
        regex = /[d]/;
        input =input.replace(regex, '01100100')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[e]/;
        input =input.replace(regex, '01100101')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[f]/;
        input =input.replace(regex, '01100110')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
        regex = /[g]/;
        input =input.replace(regex, '01100111')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[h]/;
        input =input.replace(regex, '01101000')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
        regex = /[i]/;
        input =input.replace(regex, '01101001')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[j]/;
        input =input.replace(regex, '01101010')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.50)
    {
        regex = /[k]/;
        input =input.replace(regex, '01101011')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[l]/;
        input =input.replace(regex, '01101100')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[m]/;
        input =input.replace(regex, '01101101')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[n]/;
        input =input.replace(regex, '01101110')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[o]/;
        input =input.replace(regex, '01101111')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[p]/;
        input =input.replace(regex, '01110000')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
        regex = /[q]/;
        input =input.replace(regex, '01110001')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
        regex = /[r]/;
        input =input.replace(regex, '01110010')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.50)
    {
        regex = /[s]/;
        input =input.replace(regex, '01110011')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
        regex = /[t]/;
        input =input.replace(regex, '01110100')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[u]/;
        input =input.replace(regex, '01110101')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[v]/;
        input =input.replace(regex, '01110110')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.40)
    {
        regex = /[w]/;
        input =input.replace(regex, '01110111')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[x]/;
        input =input.replace(regex, '01111000')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[y]/;
        input =input.replace(regex, '01111001')
        boolean_reference_instance.bool_value = true;
    }

    if(Math.random() < 0.30)
    {
        regex = /[z]/;
        input = input.replace(regex, '01111010')
        boolean_reference_instance.bool_value = true;
    }
        //console.log(input)

        return input;    
}

    //get letter to place in alphabet not included call after split function
function get_new_letter(input)
{
    //creates a utility object so that we may pass a boolean value by referece. The bool_value property will be changed if a change offurs
    let temp_object = new boolean_reference();
    if(Math.random() < 0.4)
    {
        input = letter_to_Binary(input, temp_object);
        console.log("Bool of temp_object after function call to letter_to_Binary should be true : " + temp_object.bool_value)
    }
    
    console.log("temp_object.bool_value in get_new_letter is : " + temp_object.bool_value)
    if(temp_object.bool_value === false)
    {
        input = letter_to_Hex(input, temp_object)
        console.log("Bool of temp_object after function call letter_to_Hex should be true : " + temp_object.bool_value)
    }


    return input;
}

function generate_new_string(input)
{
    console.log("Input for generate_new_string method is : " + input)
    let new_string = "";
     for(var i = 0; i<input.length; i++)
     {
        console.log("input.charAt(i) for the generate_new_String method is : " + input.charAt(i));
        console.log("get_new_letter(input.charAt(i) for the generate_new_string is : " + get_new_letter(input.charAt(i)));
        new_string = new_string + get_new_letter(input.charAt(i))
        console.log("New String in the generate_new_String method is : " + new_string)
     }
     return new_string;
}

function special_chars_replacement(input)
{
    if(Math.random() < 0.3)
    {
        regex = /[c]/;
        input =input.replace(regex, '\u24B8')
    }

    if(Math.random() < 0.4)
    {
        regex = /[L|l][o][v][e]/;
        input =input.replace(regex, '\u2764')
    }

    /*if(Math.random() < 0.35)
    {
        regex = /[MEN]|[men]|[Men]/;
        input =input.replace(regex, '\u1F6B9')
    }*/



    return input
}

//utility class so that I may pass boolean values by reference
class boolean_reference
{
    constructor()
    {
        this.bool_value = false;
    }
}

    function main()
        {
            button.addEventListener('click', function(){
                generate_musk_name(name.value);
            })

            console.log("********************************************************************            " 
            + "INSTANCE STARTS"
            +"     **********************************************************************************")
    
        }
    main()
}