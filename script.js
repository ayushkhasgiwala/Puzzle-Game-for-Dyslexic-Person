//global variables
var output_box_start_pos = -4, index = 0, input_index_list=[], level_index=0, image_set_index=0, shuffled_level=[], score=0, wrong_attempts=0, score_temp = 4;

// level_images is an array of levels. Each level is an array of image sets.
level_images = [
    [
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1.jpeg?v=1605716975727",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2.jpeg?v=1605716852160",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3.jpeg?v=1605716851629"
            },
            "answer": "FARM"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1_hotel.jpeg?v=1605717048555",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2_hotel.jpeg?v=1605717086172",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3_hotel.jpeg?v=1605717048555"
            },
            "answer": "HOTEL"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_island.jpeg?v=1605717128364",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_island.jpeg?v=1605717128364",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_island.jpeg?v=1605717128604"
            },
            "answer": "ISLAND"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_road.jpeg?v=1605717179995",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_road.jpeg?v=1605717180084",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_road.jpeg?v=1605717180201"
            },
            "answer": "ROAD"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_train.jpeg?v=1605717229314",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_train.jpeg?v=1605717229314",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_train.jpeg?v=1605717229314"
            },
            "answer": "TRAIN"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_coffee.jpeg?v=1605717310271",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_coffee.jpeg?v=1605717310803",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_coffee.jpeg?v=1605717310527"
            },
            "answer": "COFFEE"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_delhi.jpeg?v=1605717363051",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_delhi.jpeg?v=1605717363051",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_delhi.jpeg?v=1605717363051"
            },
            "answer": "DELHI"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_nokia.jpeg?v=1605717406466",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_nokia.jpeg?v=1605717406467",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_nokia.jpeg?v=1605717406927"
            },
            "answer": "NOKIA"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_park.jpeg?v=1605717447194",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_park.jpeg?v=1605717447925",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_park.jpeg?v=1605717447194"
            },
            "answer": "PARK"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_water.jpeg?v=1605717491614",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_water.jpeg?v=1605717491258",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_water.jpeg?v=1605717491363"
            },
            "answer": "WATER"
        }
    ], 
    [
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_bird.jpeg?v=1605717535068",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_bird.jpeg?v=1605717536244",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_bird.jpeg?v=1605717535068"
            },
            "answer": "BIRD"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_chocolate.jpeg?v=1605717575279",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_chocolate.jpeg?v=1605717575280",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_chocolate.jpeg?v=1605717575280"
            },
            "answer": "CHOCOLATE"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_desert.jpeg?v=1605717623075",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_desert.jpeg?v=1605717623075",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_desert.jpeg?v=1605717624566"
            },
            "answer": "DESERT"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_diwali.jpeg?v=1605717676301",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_diwali.jpeg?v=1605717676301",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_diwali.jpeg?v=1605717677179"
            },
            "answer": "DIWALI"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_mcd.jpeg?v=1605717729144",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_mcd.jpeg?v=1605717729771",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_mcd.jpeg?v=1605717729637"
            },
            "answer": "MCDONALDS"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_minion.jpeg?v=1605717776051",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_minion.jpeg?v=1605717776394",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_minion.jpeg?v=1605717776051"
            },
            "answer": "MINION"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_paris.jpeg?v=1605717829555",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_paris.jpeg?v=1605717829214",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_paris.jpeg?v=1605717829400"
            },
            "answer": "PARIS"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_school.jpeg?v=1605717883077",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_school.jpeg?v=1605717883335",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_school.jpeg?v=1605717883572"
            },
            "answer": "SCHOOL"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_street.jpeg?v=1605717937699",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_street.jpeg?v=1605717937699",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_street.jpeg?v=1605717937699"
            },
            "answer": "STREET"
        },
        {
            "images": {
                "img1": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg1%20(copy)_sunrise.jpeg?v=1605717992033",
                "img2": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg2%20(copy)_sunrise.jpeg?v=1605717993016",
                "img3": "https://cdn.glitch.com/9078efc3-065d-4343-9e2d-ce55abf96f87%2Fimg3%20(copy)_sunrise.jpeg?v=1605717992168"
            },
            "answer": "SUNRISE"
        }
    ]
]

/*shuffle function
arg should be an array */
function shuffle_obj(array) {
    var currentIndex = array.length;
    var randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex > 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);

        //Decreament currentIndex
        currentIndex -= 1;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    // console.log(array);

    return array;
}

//get random letters of length 10
function get_letters(answer) {
    var remaining_length = 10 - answer.length;
    //convert string to character array
    var res_list = answer.split("");
    var random_letter;

    //console.log(res_list);
    //console.log(remaining_length);

    for (i = 0; i < remaining_length; ++i) {
        //get a random no between 0-25 inclusive
        random_letter = Math.floor(Math.random() * 26);
        //convert random no to capital character
        random_letter = String.fromCharCode(65 + random_letter);

        //console.log("Randomly generated " + random_letter+" of type "+typeof(random_letter));

        res_list.push(random_letter)
    }
    return res_list;
}

//Display empty boxes for output 
function display_empty_boxes(answer) {

    var length = answer.length;
    var start = (10 - length) / 2;
    var x = output_box_start_pos + start;
    var y = 0.9, z = -6;
    index = 0;
    m = 0;
    //initially all the boxes are made visible
    for (i = 0; i < 10; i++) {
        document.getElementById("output_box_" + i).setAttribute("visible", true);
        document.getElementById("output_text_" + i).setAttribute("value", "");
    }
    //display only required number of boxes at correct position
    for (i = 0; i < length; i++) {
        document.getElementById("output_box_" + i).setAttribute("position", x + " " + y + " " + z);
        x++;
    }
    //hide remaining boxes
    for (i = length; i < 10; i++)
        document.getElementById("output_box_" + i).setAttribute("visible", false);
}

function display_image_on_screen(image_object) {
    // display image on screen
    for (i = 0; i < 3; ++i) {
        document.getElementById("screen_" + i).setAttribute("src", image_object["images"]["img" + (i + 1)]);
    }
}

function initialize_level() {
    if(level_index < level_images.length) {
        shuffled_level = shuffle_obj(level_images[level_index]);
        image_set_index=0;
        initialize_screens();
    }
}

function initialize_screens() {    
    if(image_set_index < shuffled_level.length) {
        answer = get_letters(shuffled_level[image_set_index]["answer"]);
        answer = shuffle_obj(answer);
        answer = answer.join();
        answer = answer.replaceAll(',', '');

        display_image_on_screen(shuffled_level[image_set_index])
        display_empty_boxes(shuffled_level[image_set_index]["answer"]);
        for(var i=0; i<answer.length; i++) {
            display_input_text_letter(answer[i]);
        }
    } else {
        swal("Level "+(level_index+1)+" complete!", "Total Score: "+score, "success");
        ++level_index;
        if(level_index==level_images.length) {
            swal("Level "+level_index+" complete!", "Total Score: "+score+"\nDo you want to restart the game?", "success", {
                buttons: {
                    No: "No",
                    Yes: "Yes",
              },
            }).then((value) => {
                if(value=="Yes") {
                    document.location = "game.html"
                } else if(value=="No") {
                    document.location = "index.html"
                }
            });
        }
        initialize_level();
    }    
}

function get_answer() {
    res = "";
    for(i=0; i<input_index_list.length; ++i) {
        res += document.getElementById("output_text_" + i).getAttribute('value');
    }
    return res;
}

//checking the answer
function checkans(ans,input)
{
    //getting the length of answer
    var alen=ans.length;
    //getting the length of input
    var ilen=input.length;
    //matching the answer
    if(alen!=ilen)
    {
        return false;
    }
    else
    {
        for(var i=0;i<alen;i++)
        {
            if(ans[i]==input[i])
            {
                continue;
            }
            else
            {
                return false;
            }
        }
    }
    return true;
}

function display_score() {
    score_str = score.toString();
    mid_position = -0.1;
    xpos = mid_position - (0.04)*(score_str.length-1);
    document.getElementById("scoreboard_text2").setAttribute('position', {x: xpos, y: -0.2, z: 1});
    document.getElementById("scoreboard_text2").setAttribute('value', score);
}

function validate_answer() {
    var input=get_answer()
    var ans=shuffled_level[image_set_index]["answer"];
    if(input.length==ans.length)
    {
        if(checkans(ans,input)==true)
        {   
            image_set_index++;
            score+=score_temp;
            display_score();
            wrong_attempts = 0;
            score_temp=4;
            swal("Correct", "Score: " + score,"success");
        } else {
            swal("Wrong, Please try again", "Score: " + score,"error");
            ++wrong_attempts;
        } 
        if(wrong_attempts==3) {
            score_temp/=2;
        }
        input_index_list=[];
        initialize_screens();
    }
}

$(document).ready(function () {
    initialize_level();
    //initialize_screens();
    display_score();  
});

// Display letter over the output boxes
function display_input_letter(letter) {
    $("#output_text_" + index).attr("value", letter);
    index++;
}

// Display text over the buttons
function display_input_text_letter(letter) {
    $("#input_text_" + m).attr("value", letter);
    m++;
}


AFRAME.registerComponent('onclick_take_input', {
    init: function () {
        var data = this.data;
        var ind = data.index
        //console.log(ind)
        var element = this.el;
        var originalColor = element.getAttribute('material').color;
        console.log(originalColor);
        var element1 = document.getElementById("input_text_"+ind);  
        element.addEventListener('click', function () {
            if(element.getAttribute('material').color==originalColor &&element1.getAttribute('value')!=""){
                value=element1.getAttribute('value');
                element1.setAttribute('value', "");
                display_input_letter(value)
                input_index_list.push(ind);
                element.setAttribute('color', data.color);
                validate_answer();
            }
        });

        element.addEventListener('mouseleave', function () {
            element.setAttribute('color', originalColor);
        });
    }
});

AFRAME.registerComponent('change-color-on-click', {
    init: function () {
        var data = this.data;
        var element = this.el; 
        var orginalColor = element.getAttribute('material').color;

        //code inside this function getting executed twice
        element.addEventListener('click', function () {
            if (index > 0 && element.getAttribute('material').color==orginalColor) {
                letter = document.getElementById("output_text_" + (index - 1)).getAttribute('value');
                document.getElementById("output_text_" + (index - 1)).setAttribute("value", "");
                index--;
                ind =input_index_list[index]
                $("#input_text_" + ind).attr("value", letter);
                input_index_list.pop();
            }
            element.setAttribute('color', data.color);
        });
        element.addEventListener('mouseleave', function () {
            element.setAttribute('color', orginalColor);
        });
    }
});
