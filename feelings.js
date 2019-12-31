/*global $*/
(function () {
    'use strict';

    const data = [
        ['RCDP Procedure', 'Ability to adjust and analyze actions from real-time feedback', "<img src=\"images/one.png\" style\"width:85%; max-width:1000px;\">I liked the real time feedback. Being able to say stop and Give us the tip about the back board and all that. I love that.", undefined],
        ['RCDP Procedure', 'Ability to adjust and analyze actions from real-time feedback', "I felt like when we first started and she said pause she gave us some really good feedback and then we started over that second time we were even better than the first time. We paused again and we start over again the third time we were better than the first two. And I felt like it was just progressively getting better because we were getting those little tidbits of information that we needed throughout.", undefined],
        ['RCDP Procedure', 'Ability to adjust and analyze actions from real-time feedback', "The feedback that real time was really helpful and kind of made you think about stuff that you might not think about especially after doing it for so long.", undefined],
        ['RCDP Procedure', 'Ability to adjust and analyze actions from real-time feedback', "I do so much better when somebody is giving constructive feedback. I just I learn better from that I take it home with me better. So that was extremely helpful to have real time feedback.", undefined],
        ['RCDP Procedure', 'Ability to adjust and analyze actions from real-time feedback', "I also found it very effective the positive reinforcement was good telling you what to work on was great. I felt like I actually learned a lot.", undefined],
        ['RCDP Procedure', 'Ability to adjust and analyze actions from real-time feedback', "Constructive criticism was really good because things that you know if they kept going it wouldn't get addressed and wouldn't learn from it and then you could regroup and learn back and start over and do it again the right way.", undefined],
        ['RCDP Procedure', 'Benefits of repetition and muscle memory', "It's repetition. It's key to recall and skill development. You get a lot of repetition and adding steps as you go not getting it all in one bite. I think it would become the most efficient way to learn these skills.", undefined],
        ['RCDP Procedure', 'Benefits of repetition and muscle memory', "Eventually it will get repetitive and they will do it from muscle memory.", undefined],
        ['RCDP Procedure', 'Benefits of repetition and muscle memory', "I felt like when we first started and she said pause she gave us some really good feedback and then we started over that second time we were even better than the first time. We paused again and we start over again the third time we were better than the first two. And I felt like it was just progressively getting better because we were getting those little tidbits of information that we needed throughout. I liked that a lot.", undefined],
        ['RCDP Procedure', 'Benefits of repetition and muscle memory', "I hate sim normally it's just not my thing but today especially with the Rapid Cycle. I think we all agree that like repetition keeps that in our brain quicker and makes it last longer. So the fact of like do it for a very short time. OK stop. Here's what you need to fix. Do it again. It's like exercising that muscle in our brain to hold that information in as opposed to get through the whole thing…I  think it helps build better habits", undefined],
        ['RCDP Procedure', 'Benefits of repetition and muscle memory', "You could regroup and learn back and start over and do it again the right way. And practice you know what you are being instructed on doing. So I think it was really good.", undefined],
        ['RCDP Procedure', 'Benefits of repetition and muscle memory', "I use putting the board under the patient during CPR is a great example. You stop get the importance of it go over the procedure and the multiple cycles incorporating it. I found the third time simulation was restarted for other reasons. You could see that placing the backboard became just part of the rhythm and it was it went much more smoothly. It was done very quickly. Which started to get me to buy into the process it was less aggravating because I see the impact it was having on the flow.", undefined],
        ['RCDP Procedure', 'Interruptions and Pauses', "I liked the pauses and I think the instructors today were amazing and I liked the pauses and I liked the feedback and the starting over.", "pos"],
        ['RCDP Procedure', 'Interruptions and Pauses', "It was very positive the stop and go was great it like helps to fine tune things that maybe you don't you know wouldn't be seen or addressed like if even if  the instructor. If they notice you're doing something but in the immersive one it's by the end they're not going to remember or they're thinking of something else so that's not addressed. So I think it's cool how they stop and go like they can immediately be addressed.", "pos"],
        ['RCDP Procedure', 'Interruptions and Pauses', "I think it was effective because it was such frequent pausing to say you did all of these things right. And it really like such a positive reinforcement that I found it very helpful.", "pos"],
        ['RCDP Procedure', 'Interruptions and Pauses', "I will say that it was informative when she the stop and pause and the stop and pause and go made us really aware of what we was doing and it allowed us to actually to get in sync with each other.", "pos"],
        ['RCDP Procedure', 'Interruptions and Pauses', "I think at first it was it was an adjustment. You know just change your momentum and thoughts and everything are going so it’s hard to just be like errr stop and listen and start over.", "pos"],
        ['RCDP Procedure', 'Interruptions and Pauses', "I've already got in mind what I need to accomplish. I set about doing it you get in that mindset and you get stopped it is aggravating. Because I have got stuff I need to do.", "change"],
        ['RCDP Procedure', 'Interruptions and Pauses', "To me the breaks in it cause you to break concentration. I don’t know that the breaks were beneficial to be quite honest, ", "change"],
        ['RCDP Procedure', 'Interruptions and Pauses', "To me this is interrupting that muscle memory. I'm losing my concentration.", "change"],
        ['RCDP Procedure', 'Interruptions and Pauses', "There is something about pausing that almost stopped us from problem solving. Because the solution was just given to us that was this was your problem. This is how you would fix it. Instead of us actually going and actually figuring it out on our own.", "change"],
        ['RCDP Procedure', 'Interruptions and Pauses', "I think that by stopping that was that we did it stops the scenario from developing because we would probably have covered those things on into the scenario as it developed.", "change"],
        ['RCDP Behavioral', 'Emotions', "I kind of like pausing and then when you kind of talk about it kind of takes away [stress] what all it kind of relieves you and you are like ok that makes sense and then you do it right way. It kind of gives you a little bit of motivation. And then you pause again it kind of it just helped me to not be so stressed out about it. Not trying to worry about getting through the scenario and not messing up.", "pos"],
        ['RCDP Behavioral', 'Emotions', "I wasn't so worried about what they were wanting me to do or expecting me to do because when we paused she said \"I like you're doing this, I like that you're doing this. I notice that you all did that. That's exactly correct. I would do this in this situation\" And I feel like that's more helpful because, like he was saying it takes that stress away and it is more laid back and it doesn't make you feel like you're supposed to have all these boxes that they are checking off on.", "pos"],
        ['RCDP Behavioral', 'Emotions', "They are really stopping you and breaking it down and you know exactly like she said everybody has a role you know exactly what you are supposed to do. I just felt more comfortable.", "pos"],
        ['RCDP Behavioral', 'Emotions', "For some reason that felt more stressful to me than the other sims.", "change"],
        ['RCDP Behavioral', 'Emotions', "At first when it first started I was intimidated. Just because I have not worked with anybody here.", "change"],
        ['RCDP Behavioral', 'Emotions', "First reaction to it is one of frustration because your natural inclination when simulating a real life critical care event is to move rapidly and to be very assertive and I think that when you're in the middle of assertive task and someone asks you to hold that task your initial response is frustration.", "change"],
        ['RCDP Behavioral', 'Emotions', "At first I found it kind of aggravating.", "change"],
        ['RCDP Behavioral', 'Emotions', "It was frustrating.", "change"],
        ['RCDP Behavioral', 'Confidence', "I felt like it was less of a test and more of an interaction. And I think that was a big difference for confidence building. When you're trying to do and you're trying to like make a better practitioner of yourself.", undefined],
        ['RCDP Behavioral', 'Confidence', "I liked the muli-profession sim in a group because I think that quite honestly they were all trained to do different things like when you work in medicine you often have to do other people's roles. And I think that it builds confidence. To know what is it that respiratory therapy has learned. Because I might have to do what he does some of the time and what nursing like for instance starting IVs or just specific procedural things and just knowledge brings in. I think everybody has to learn from each other and you never know when you going have to do somebody else's role", undefined],
        ['RCDP Behavioral', 'Confidence', "My comfort level has risen extremely high. As a leader I didn't feel as confident the first time I didn't feel like I could lead my team as well as I could today. Today I felt much more confident and I feel like simulation actually brought me to that point that I need to be.", undefined],
        ['RCDP Learning', 'Orientation to new space and roles', "We're going to have to work together as a team. And respiratory might have to do compressions even if it gets down to it the OSS might have to do compressions… We're going to have to work a lot harder and assume different roles than we have at main. I think it was beneficial in that sense to see that.", undefined],
        ['RCDP Learning', 'Orientation to new space and roles', "I think it was just very beneficial just all of it sims were just because we saw how we are going to have to work together more as a team and the lack of resources that we have. We do not have as many people running around. So we are all going to have to like assume new roles.", undefined],
        ['RCDP Learning', 'Orientation to new space and roles', "I think the people that I didn't know today I felt like I bonded with professionally.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "This is the only I've never found sim to be a learning opportunity for me. I've not ever learned anything from one sim I've ever been in and I felt like I took a lot of information from today and this is only sim that I could ever say that about.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "Usually the sims are just awkward and not fun for me. But this was not bad at all. I enjoyed it so it's a good experience and it's I thought it was very effective.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "I think a lot of times we need somebody else outside of the group to make us stop and regroup on what we need to be doing, because we are so focused on what we are doing that we are actually not paying attention if we are doing it the correct way.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "I think in retrospect it improves the efficiency by identifying weaknesses in your algorithm and your delivery of that algorithm.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "I feel like when you do hands on versus just reading or even just computer I feel like hands on it makes you retain that easier. So, having a team doing the simulation and acting it out as if it's a real patient that's going to stick with you easier and longer.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "I think it's more effective. I'll walk away remembering this a whole lot more.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "For things that have changed in the protocols and the algorithms and all that, I didn't realize had changed so it was a very it was really good in staying up to date on that.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "For multi-discipline complex procedures like a resuscitation I think it could become the norm. I think that's going to be more productive than the standard simulation or the standard classes.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "I think when you do your education it's good to gear it for the audience that you have or the people who are engaged. If you've got a really experienced people they might not need all the detail where other people might be getting new grads or new employees. You know they may need more refresher course.", undefined],
        ['RCDP Learning', 'Effectiveness as continuing education', "I think for the negative constructive feedback that you get. It is a little bit challenging if there are other ways that things can be done. And so I don't really know how to incorporate. I think you definitely should get all the positive feedback during the sim but I would say it is a challenge to know when you're correcting somebody if they are completely doing something wrong or are they just doing it a little bit different. So I think if you are as a teaching modality you have to make sure that you're kind of sensitive other ways that people do things.", undefined],
        ['RCDP Interprofessional', 'Authenticity', "I do think they were very beneficial just so we can kind of see how limited resources that we are going to have.", undefined],
        ['RCDP Interprofessional', 'Authenticity', "It was very beneficial because that's the roles that would be there in that situation.", undefined],
        ['RCDP Interprofessional', 'Authenticity', "Once we got going I felt that it was first educational and second that it seemed realistic.", undefined],
        ['RCDP Interprofessional', 'Authenticity', "I think it is very beneficial having all the different disciplines in the same sim  because you're familiar with going to nursing school and you're in a simulation and it's only nurses when you have a sim like this where you've got every different role there. They can truly play their own role. You are not having to have to have somebody pretend and to be a doctor when they are really a nurse.", undefined],
        ['RCDP Interprofessional', 'Authenticity', "That just keeps it realistic, we are a multi-disciplined team. I think you have to have it that way", undefined],
        ['RCDP Interprofessional', 'Authenticity', "Very well suited to emergency medicine in general because I think among the specialties we are one of the ones that is more multidisciplinary and more integrated we often work side by side on the same patient at the same time", undefined],
        ['RCDP Interprofessional', 'Focus on patient care and team-based care', "I specifically liked that she helped the whole team figure out code words to communicate different thing to each other and remind people about eye contact or speaking out loud when you do something. I mean I don't I think after you have practiced for a while you don't always think to do that. Nothing sort of, those key words actually are helpful in stressful situation. And they become something that people listen to and listen for.", undefined],
        ['RCDP Interprofessional', 'Focus on patient care and team-based care', "It helped to build teamwork. I think it was very helpful, helpful in getting roles and how we're interacting and how we'll working together.", undefined],
        ['RCDP Interprofessional', 'Focus on patient care and team-based care', "In the ER we do work at the bedside together all of us RT, RN, MD, PCTs everybody is in there it helped delineate the rolls to make them a little more seamless.", undefined],
        ['RCDP Interprofessional', 'Focus on patient care and team-based care', "I think it's good we have a simulation and have all components of a team because that's how it's going to be in the real world. When you are put in a situation like that. And also you know once again gives everybody a chance to practice their roles and know if it were to happen what they are all assigned to do and just practice up on skills you may not have used in a while. So I think all components of the team even unit secretaries and the PCTs that we have involved today I know hey you know great job on compressions or hey you know helping call bed accommodations to get you know sped up on the process of getting the patient transferred out to where we can focus on other patients. So I think all components of the team are important in this.", undefined],
        ['RCDP Interprofessional', 'Focus on patient care and team-based care', "I think it was beneficial to go through it and see the little things that we need to correct before an actual patient care.", undefined],
        ['RCDP Interprofessional', 'Focus on patient care and team-based care', "Get the chance to practice on a case and kind of refresh yourself on something you may not see in real life but if you do happen to see it and you have done a simulation on it within the last year or two then it actually helps the patient.", undefined]
    ];

    let $main = $('#main');

    //add header
    $main.append($('<p>', {
        class: "h2",
        text: "Perceptions of Practicing Interdisciplinary Health Professionals on Rapid Cycle Deliberate Practice Simulation"
    }));


    //create accordion
    let currentHeader = "";
    let currentHeading = "";
    let $currentAcc;
    let $currentBody;
    data.forEach(function (line) {
        if (line[0] !== currentHeader) {
            if ($currentAcc) {
                console.log('here...');
                $currentAcc.appendTo($main);
            }
            currentHeader = line[0];
            $currentAcc = $('<div>', {
                id: currentHeader.replace(/\W/gi, "")
            });
            $('<p>', {
                class: "h3",
                style: "margin-top: 40px; padding-top: 10px; padding-left: 3px; padding-bottom: 10px; margin-bottom: 0px; border: 5px; color:#FFFFFF; border-radius: 5px; background-color:#295135;",
                text: currentHeader
            }).appendTo($main);
        }
        if (line[1] !== currentHeading) {
            currentHeading = line[1];
            $currentBody = $('<div>', {
                class: "card-body"
            });
            //create card
            $('<div>', {
                class: "card"
            }).append( //append header
                $("<div>", {
                    class: "card-header",
                    id: currentHeading.replace(/\W/gi, "") + "heading"
                }).append(
                    $("<h5>", {
                        class: "mb-0"
                    }).append($('<button>', {
                        class: 'btn btn-link collapsed',
                        "data-toggle": "collapse",
                        "data-target": '#' + currentHeading.replace(/\W/gi, ""),
                        "aria-expanded": "false",
                        "aria-controls": currentHeading.replace(/\W/gi, ""),
                        text: currentHeading
                    }))
                )
            ).append(
                $('<div>', {
                    id: currentHeading.replace(/\W/gi, ""),
                    class: "collapse",
                    "aria-labelledby": currentHeading.replace(/\W/gi, "") + "heading",
                    "data-parent": "#" + currentHeader.replace(/\W/gi, "")
                }).append($currentBody)
            ).appendTo($currentAcc);
        }
        //add in actual text
        $currentBody.append($('<blockquote>', {
            class: "blockquote",
            html: line[2]
        }));
    });
    $currentAcc.appendTo($main);
/*
<div id="accordion">

  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
*/
    console.log(data);
}());
