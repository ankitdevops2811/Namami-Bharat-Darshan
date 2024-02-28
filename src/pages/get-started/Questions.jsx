import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./get-started-page.css";

const Questions = () => {
  return (
    <>
      <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Intensive Therapy Questions
            </h1>
          </div>
        </div>
      </div>
      <div className="inner_content faq_content">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Accordion
                defaultIndex={[0]}
                allowMultiple
                style={{ borderBlockColor: "lightblue" }}
              >
                <AccordionItem>
                  <h2 style={{ color: "darkgoldenrod" }}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <strong>
                          What gains can I expect to see from an intensive
                          session?
                        </strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    As you know many of our children have the same diagnoses,
                    but vastly differ in their level of ability. For this
                    reason, it’s very difficult to judge exactly what gains your
                    child may see from an intensive session. On the first day of
                    your child’s session you will meet with your therapist and
                    come up with a set of realistic goals for the next three
                    weeks. Your primary concerns will be taken into account, so
                    please feel free to discuss openly what you would most
                    likely to concentrate on.Typically we strive for 6-12 months
                    of typical development for your child, when comparing the
                    program to a weekly therapy program.
                  </AccordionPanel>
                </AccordionItem>
                {/* 2 */}
                <AccordionItem>
                  <h2 style={{ color: "darkgoldenrod", textShadow: blur }}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <strong>When will I know my final schedule?</strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    While booking in advance in no way guarantees your
                    therapists, it does secure your spot with us for this date.
                    A lot of movement happens from the day you book to the day
                    you start. For example, therapists may move clinics, take,
                    vacation time, or go on maternity leave. We encourage you to
                    think of this as a tentative draft. For this reason, mission-walk
                    will release your finalized schedule 30 days prior to your
                    intensive start date.
                  </AccordionPanel>
                </AccordionItem>
                {/* 3 */}
                <AccordionItem>
                  <h2 style={{ color: "darkgoldenrod" }}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <strong>
                          {" "}
                          What should my child wear during therapy?
                        </strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Think lightweight and comfortable! The ideal outfit is a
                    t-shirt, pants or leggings, and sneakers. Avoid baggy
                    clothing which tends to bunch up under the NeuroSuit and
                    SpiderCage harness. Jeans and shorts should also be avoided.
                  </AccordionPanel>
                </AccordionItem>
                {/* 4 */}
                <AccordionItem>
                  <h2 style={{ color: "darkgoldenrod" }}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <strong>What should I bring?</strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <span style={{ fontSize: "27px", marginRight: "1.5%" }}>
                      &#9758;
                    </span>
                    The Basics: Braces, AFOs, regular shoes that fit with AFOs,
                    change of clothes, and a water bottle. <br />
                    <span style={{ fontSize: "27px", marginRight: "1.5%" }}>
                      &#9758;
                    </span>
                    Food and Drink: Our parent lounge is equipped with a fridge,
                    microwave, toaster, oven, coffee, tea, filtered water,
                    dishes, and utensils. <br />
                    <span style={{ fontSize: "27px", marginRight: "1.5%" }}>
                      &#9758;
                    </span>
                    Daily Tools: Any equipment you would like to incorporate in
                    the session like walkers, wheelchairs, AAC Device,
                    communication tools. <br />{" "}
                    <span style={{ fontSize: "27px", marginRight: "1.5%" }}>
                      &#9758;
                    </span>
                    Motivation: Favorite books, toys, electronic devices,
                    rewards always come in handy with therapy gets tough!
                  </AccordionPanel>
                </AccordionItem>
                {/* 5 */}
                <AccordionItem>
                  <h2 style={{ color: "darkgoldenrod" }}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <strong>What should we expect?</strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Crying is normal: We typically push through when your kids
                    protest, and it really does get better.
                    <br />
                    <br />
                    Food and Drink: We take pride in our facility! Water in a
                    closed container is the only beverage allowed on the
                    treatment floor. Additionally, we ask you keep all food in
                    the parent lounge with the exception of a snack for your
                    child during therapy. <br />
                    <br />
                    Expect your schedule to change: Therapists get sick or need
                    a day off sometimes too. If your therapist happens to be
                    out, we do our best to notify you ahead of time and provide
                    you with a sub. <br />
                    <br />
                    Make Up hours: If you can’t make a session, we will do our
                    best to help you make up those hours with a therapist that
                    is open. Adding on make-up hours to an already long
                    intensive day is not advised. If we can’t make up the hours
                    outside of your intensive or if we don’t have any
                    availability, we will save the funds as a credit to be
                    applied towards Telehealth or your next intensive round.
                    <br />
                    <br />
                    But first Lunch: All patients and therapists break for lunch
                    from 12:00 -12:30. Store perishable items in the parent
                    lounge fridge. <br />
                    <br />
                    Intensives are Intense: Your kid will be tired, and
                    intensives can be surprisingly taxing on family as well.
                    Strike a balance between fun activities and extra scheduled
                    down time. Getting plenty of rest alongside nutrient rich
                    meals is our best advice to combat mental and physical
                    fatigue.
                  </AccordionPanel>
                </AccordionItem>
                {/* 6 */}
                <AccordionItem>
                  <h2 style={{ color: "darkgoldenrod" }}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <strong>
                          {" "}
                          Do I need to submit additional paperwork or
                          evaluations?
                        </strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    45 days before your session starts, we will reach out to
                    start the paperwork collection process to ensure we&apos;re
                    prepared for your arrival. <br />
                    <br />
                    1. Prescription - we will request your doctor&apos;s name
                    and fax number to submit a prescription request. While mission-walk
                    will fax this in, it is your responsibility to follow up
                    with the doctor to get this form sent back. <br />
                    <br />
                    2. Evaluations - for each type of therapy you are
                    participating in (PT, OT, and Speech). If you don’t have
                    these documents that’s okay, let your intensive coordinator
                    know and we can schedule them for an additional fee. <br />
                    <br />
                    3. Intake Paperwork Update - if you have not completed your
                    intake paperwork within the past 12 months, we will ask you
                    to complete an update.
                  </AccordionPanel>
                </AccordionItem>
                {/* 7 */}
                <AccordionItem>
                  <h2 style={{ color: "darkgoldenrod" }}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <strong> Are siblings able to attend?</strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Sessions run smoother when both the parents and therapists
                    can focus on the patient at hand. If you must bring
                    siblings, they may wait in the parent lounge, but must
                    always be supervised by parents. We ask you keep them off
                    the therapy equipment and refrain from using toys as
                    tempting as our open gym setting is.
                  </AccordionPanel>
                </AccordionItem>
                {/* 8 */}
                <AccordionItem>
                  <h2 style={{ color: "darkgoldenrod" }}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <strong>
                          {" "}
                          What happens if my child becomes ill prior to their
                          session?
                        </strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    If your child becomes ill prior to the session start date
                    please contact us ASAP so we can give another family on our
                    wait list a chance to come to mission-walk. With a doctors note, we
                    can save the money you put towards this intensive as a
                    credit towards the next session you schedule with us. We
                    most likely will not be able to get you in right away, but
                    once we do, just ask our billing team to apply this saved
                    credit.
                  </AccordionPanel>
                </AccordionItem>
                {/* 9 */}
                <AccordionItem>
                  <h2 style={{ color: "darkgoldenrod" }}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <strong>
                          {" "}
                          When is the soonest I can schedule my next intensive?
                        </strong>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Typically, we recommend a two to three-month break prior to
                    your next session. You will continue to see gains after your
                    child’s session, and it is just as important to build off
                    those gains as the intensive session itself.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;

