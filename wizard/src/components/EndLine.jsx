import React, { useEffect, useState } from "react";

export default function EndLine() {
  const TimerComponent = () => {
    const [isSwitched, setIsSwitched] = useState(false);
    const timer = 10000;

    useEffect(() => {
      const interval = setInterval(() => {
        setIsSwitched((prevIsSwitched) => !prevIsSwitched);
      }, timer);

      return () => clearInterval(interval);
    }, []);
    return (
      <div id="ui" className={isSwitched ? "switch" : ""}>
        Content
      </div>
    );
  };

  return (
    // <!-- text -->
    <div id="ui">
      <p>I solemnly swear that I am up to no good.</p>
      {/* <!-- feet & track --> */}
      <div className="track track_1">
        <div className="foot left">
          <div className="foot_claw"></div>
          <div className="foot_claw"></div>
          <div className="foot_claw"></div>
        </div>
        <div className="foot right">
          <div className="foot_claw"></div>
          <div className="foot_claw"></div>
          <div className="foot_claw"></div>
        </div>
        <div className="track track_2">
          <div className="foot left">
            <div className="foot_claw"></div>
            <div className="foot_claw"></div>
            <div className="foot_claw"></div>
          </div>
          <div className="foot right">
            <div className="foot_claw"></div>
            <div className="foot_claw"></div>
            <div className="foot_claw"></div>
          </div>
          <div className="track track_3">
            <div className="foot left">
              <div className="foot_claw"></div>
              <div className="foot_claw"></div>
              <div className="foot_claw"></div>
            </div>
            <div className="foot right">
              <div className="foot_claw"></div>
              <div className="foot_claw"></div>
              <div className="foot_claw"></div>
            </div>
            <div className="track track_4">
              <div className="foot left">
                <div className="foot_claw"></div>
                <div className="foot_claw"></div>
                <div className="foot_claw"></div>
              </div>
              <div className="foot right">
                <div className="foot_claw"></div>
                <div className="foot_claw"></div>
                <div className="foot_claw"></div>
              </div>
              <div className="track track_5">
                <div className="foot left">
                  <div className="foot_claw"></div>
                  <div className="foot_claw"></div>
                  <div className="foot_claw"></div>
                </div>
                <div className="foot right">
                  <div className="foot_claw"></div>
                  <div className="foot_claw"></div>
                  <div className="foot_claw"></div>
                </div>
                <div className="track track_6">
                  <div className="foot left">
                    <div className="foot_claw"></div>
                    <div className="foot_claw"></div>
                    <div className="foot_claw"></div>
                  </div>
                  <div className="foot right">
                    <div className="foot_claw"></div>
                    <div className="foot_claw"></div>
                    <div className="foot_claw"></div>
                  </div>
                  <div className="track track_7">
                    <div className="foot left">
                      <div className="foot_claw"></div>
                      <div className="foot_claw"></div>
                      <div className="foot_claw"></div>
                    </div>
                    <div className="foot right">
                      <div className="foot_claw"></div>
                      <div className="foot_claw"></div>
                      <div className="foot_claw"></div>
                    </div>
                    <div className="track track_8">
                      <div className="foot left">
                        <div className="foot_claw"></div>
                        <div className="foot_claw"></div>
                        <div className="foot_claw"></div>
                      </div>
                      <div className="foot right">
                        <div className="foot_claw"></div>
                        <div className="foot_claw"></div>
                        <div className="foot_claw"></div>
                      </div>
                      <div className="track track_9">
                        <div className="foot left">
                          <div className="foot_claw"></div>
                          <div className="foot_claw"></div>
                          <div className="foot_claw"></div>
                        </div>
                        <div className="foot right">
                          <div className="foot_claw"></div>
                          <div className="foot_claw"></div>
                          <div className="foot_claw"></div>
                        </div>
                        <div className="track track_10">
                          <div className="foot left">
                            <div className="foot_claw"></div>
                            <div className="foot_claw"></div>
                            <div className="foot_claw"></div>
                          </div>
                          <div className="foot right">
                            <div className="foot_claw"></div>
                            <div className="foot_claw"></div>
                            <div className="foot_claw"></div>
                          </div>
                          <div className="track track_11">
                            <div className="foot left">
                              <div className="foot_claw"></div>
                              <div className="foot_claw"></div>
                              <div className="foot_claw"></div>
                            </div>
                            <div className="foot right">
                              <div className="foot_claw"></div>
                              <div className="foot_claw"></div>
                              <div className="foot_claw"></div>
                            </div>
                            <div className="track track_12">
                              <div className="foot left">
                                <div className="foot_claw"></div>
                                <div className="foot_claw"></div>
                                <div className="foot_claw"></div>
                              </div>
                              <div className="foot right">
                                <div className="foot_claw"></div>
                                <div className="foot_claw"></div>
                                <div className="foot_claw"></div>
                              </div>
                              <div className="track track_13">
                                <div className="foot left">
                                  <div className="foot_claw"></div>
                                  <div className="foot_claw"></div>
                                  <div className="foot_claw"></div>
                                </div>
                                <div className="foot right">
                                  <div className="foot_claw"></div>
                                  <div className="foot_claw"></div>
                                  <div className="foot_claw"></div>
                                </div>
                                <div className="track track_14">
                                  <div className="foot left">
                                    <div className="foot_claw"></div>
                                    <div className="foot_claw"></div>
                                    <div className="foot_claw"></div>
                                  </div>
                                  <div className="foot right">
                                    <div className="foot_claw"></div>
                                    <div className="foot_claw"></div>
                                    <div className="foot_claw"></div>
                                  </div>
                                  <div className="track track_15">
                                    <div className="foot left">
                                      <div className="foot_claw"></div>
                                      <div className="foot_claw"></div>
                                      <div className="foot_claw"></div>
                                    </div>
                                    <div className="foot right">
                                      <div className="foot_claw"></div>
                                      <div className="foot_claw"></div>
                                      <div className="foot_claw"></div>
                                    </div>
                                    <div className="track track_16">
                                      <div className="foot left">
                                        <div className="foot_claw"></div>
                                        <div className="foot_claw"></div>
                                        <div className="foot_claw"></div>
                                      </div>
                                      <div className="foot right">
                                        <div className="foot_claw"></div>
                                        <div className="foot_claw"></div>
                                        <div className="foot_claw"></div>
                                      </div>
                                      <div className="track track_17">
                                        <div className="foot left">
                                          <div className="foot_claw"></div>
                                          <div className="foot_claw"></div>
                                          <div className="foot_claw"></div>
                                        </div>
                                        <div className="foot right">
                                          <div className="foot_claw"></div>
                                          <div className="foot_claw"></div>
                                          <div className="foot_claw"></div>
                                        </div>
                                        <div className="track track_18">
                                          <div className="foot left">
                                            <div className="foot_claw"></div>
                                            <div className="foot_claw"></div>
                                            <div className="foot_claw"></div>
                                          </div>
                                          <div className="foot right">
                                            <div className="foot_claw"></div>
                                            <div className="foot_claw"></div>
                                            <div className="foot_claw"></div>
                                          </div>
                                          <div className="track track_19">
                                            <div className="foot left">
                                              <div className="foot_claw"></div>
                                              <div className="foot_claw"></div>
                                              <div className="foot_claw"></div>
                                            </div>
                                            <div className="foot right">
                                              <div className="foot_claw"></div>
                                              <div className="foot_claw"></div>
                                              <div className="foot_claw"></div>
                                            </div>
                                            <div className="track track_20">
                                              <div className="foot left">
                                                <div className="foot_claw"></div>
                                                <div className="foot_claw"></div>
                                                <div className="foot_claw"></div>
                                              </div>
                                              <div className="foot right">
                                                <div className="foot_claw"></div>
                                                <div className="foot_claw"></div>
                                                <div className="foot_claw"></div>
                                              </div>
                                              <div className="track track_21">
                                                <div className="foot left">
                                                  <div className="foot_claw"></div>
                                                  <div className="foot_claw"></div>
                                                  <div className="foot_claw"></div>
                                                </div>
                                                <div className="foot right">
                                                  <div className="foot_claw"></div>
                                                  <div className="foot_claw"></div>
                                                  <div className="foot_claw"></div>
                                                </div>
                                                <div className="track track_22">
                                                  <div className="foot left">
                                                    <div className="foot_claw"></div>
                                                    <div className="foot_claw"></div>
                                                    <div className="foot_claw"></div>
                                                  </div>
                                                  <div className="foot right">
                                                    <div className="foot_claw"></div>
                                                    <div className="foot_claw"></div>
                                                    <div className="foot_claw"></div>
                                                  </div>
                                                  <div className="track track_23">
                                                    <div className="foot left">
                                                      <div className="foot_claw"></div>
                                                      <div className="foot_claw"></div>
                                                      <div className="foot_claw"></div>
                                                    </div>
                                                    <div className="foot right">
                                                      <div className="foot_claw"></div>
                                                      <div className="foot_claw"></div>
                                                      <div className="foot_claw"></div>
                                                    </div>
                                                    <div className="track track_24">
                                                      <div className="foot left">
                                                        <div className="foot_claw"></div>
                                                        <div className="foot_claw"></div>
                                                        <div className="foot_claw"></div>
                                                      </div>
                                                      <div className="foot right">
                                                        <div className="foot_claw"></div>
                                                        <div className="foot_claw"></div>
                                                        <div className="foot_claw"></div>
                                                      </div>
                                                      <div className="track track_25">
                                                        <div className="foot left">
                                                          <div className="foot_claw"></div>
                                                          <div className="foot_claw"></div>
                                                          <div className="foot_claw"></div>
                                                        </div>
                                                        <div className="foot right">
                                                          <div className="foot_claw"></div>
                                                          <div className="foot_claw"></div>
                                                          <div className="foot_claw"></div>
                                                        </div>
                                                        <div className="track track_26">
                                                          <div className="foot left">
                                                            <div className="foot_claw"></div>
                                                            <div className="foot_claw"></div>
                                                            <div className="foot_claw"></div>
                                                          </div>
                                                          <div className="foot right">
                                                            <div className="foot_claw"></div>
                                                            <div className="foot_claw"></div>
                                                            <div className="foot_claw"></div>
                                                          </div>
                                                          <div className="track track_27">
                                                            <div className="foot left">
                                                              <div className="foot_claw"></div>
                                                              <div className="foot_claw"></div>
                                                              <div className="foot_claw"></div>
                                                            </div>
                                                            <div className="foot right">
                                                              <div className="foot_claw"></div>
                                                              <div className="foot_claw"></div>
                                                              <div className="foot_claw"></div>
                                                            </div>
                                                            <div className="track track_28">
                                                              <div className="foot left">
                                                                <div className="foot_claw"></div>
                                                                <div className="foot_claw"></div>
                                                                <div className="foot_claw"></div>
                                                              </div>
                                                              <div className="foot right">
                                                                <div className="foot_claw"></div>
                                                                <div className="foot_claw"></div>
                                                                <div className="foot_claw"></div>
                                                              </div>
                                                              <div className="track track_29">
                                                                <div className="foot left">
                                                                  <div className="foot_claw"></div>
                                                                  <div className="foot_claw"></div>
                                                                  <div className="foot_claw"></div>
                                                                </div>
                                                                <div className="foot right">
                                                                  <div className="foot_claw"></div>
                                                                  <div className="foot_claw"></div>
                                                                  <div className="foot_claw"></div>
                                                                </div>
                                                                <div className="track track_30">
                                                                  <div className="foot left">
                                                                    <div className="foot_claw"></div>
                                                                    <div className="foot_claw"></div>
                                                                    <div className="foot_claw"></div>
                                                                  </div>
                                                                  <div className="foot right">
                                                                    <div className="foot_claw"></div>
                                                                    <div className="foot_claw"></div>
                                                                    <div className="foot_claw"></div>
                                                                  </div>
                                                                  <div className="track track_31">
                                                                    <div className="foot left">
                                                                      <div className="foot_claw"></div>
                                                                      <div className="foot_claw"></div>
                                                                      <div className="foot_claw"></div>
                                                                    </div>
                                                                    <div className="foot right">
                                                                      <div className="foot_claw"></div>
                                                                      <div className="foot_claw"></div>
                                                                      <div className="foot_claw"></div>
                                                                    </div>
                                                                    <div className="track track_32">
                                                                      <div className="foot left">
                                                                        <div className="foot_claw"></div>
                                                                        <div className="foot_claw"></div>
                                                                        <div className="foot_claw"></div>
                                                                      </div>
                                                                      <div className="foot right">
                                                                        <div className="foot_claw"></div>
                                                                        <div className="foot_claw"></div>
                                                                        <div className="foot_claw"></div>
                                                                      </div>
                                                                      <div className="track track_33">
                                                                        <div className="foot left">
                                                                          <div className="foot_claw"></div>
                                                                          <div className="foot_claw"></div>
                                                                          <div className="foot_claw"></div>
                                                                        </div>
                                                                        <div className="foot right">
                                                                          <div className="foot_claw"></div>
                                                                          <div className="foot_claw"></div>
                                                                          <div className="foot_claw"></div>
                                                                        </div>
                                                                        <div className="track track_34">
                                                                          <div className="foot left">
                                                                            <div className="foot_claw"></div>
                                                                            <div className="foot_claw"></div>
                                                                            <div className="foot_claw"></div>
                                                                          </div>
                                                                          <div className="foot right">
                                                                            <div className="foot_claw"></div>
                                                                            <div className="foot_claw"></div>
                                                                            <div className="foot_claw"></div>
                                                                          </div>
                                                                          <div className="track track_35">
                                                                            <div className="foot left">
                                                                              <div className="foot_claw"></div>
                                                                              <div className="foot_claw"></div>
                                                                              <div className="foot_claw"></div>
                                                                            </div>
                                                                            <div className="foot right">
                                                                              <div className="foot_claw"></div>
                                                                              <div className="foot_claw"></div>
                                                                              <div className="foot_claw"></div>
                                                                            </div>
                                                                            <div className="track track_36">
                                                                              <div className="foot left">
                                                                                <div className="foot_claw"></div>
                                                                                <div className="foot_claw"></div>
                                                                                <div className="foot_claw"></div>
                                                                              </div>
                                                                              <div className="foot right">
                                                                                <div className="foot_claw"></div>
                                                                                <div className="foot_claw"></div>
                                                                                <div className="foot_claw"></div>
                                                                              </div>
                                                                              <div className="track track_37">
                                                                                <div className="foot left">
                                                                                  <div className="foot_claw"></div>
                                                                                  <div className="foot_claw"></div>
                                                                                  <div className="foot_claw"></div>
                                                                                </div>
                                                                                <div className="foot right">
                                                                                  <div className="foot_claw"></div>
                                                                                  <div className="foot_claw"></div>
                                                                                  <div className="foot_claw"></div>
                                                                                </div>
                                                                                <div className="track track_38">
                                                                                  <div className="foot left">
                                                                                    <div className="foot_claw"></div>
                                                                                    <div className="foot_claw"></div>
                                                                                    <div className="foot_claw"></div>
                                                                                  </div>
                                                                                  <div className="foot right">
                                                                                    <div className="foot_claw"></div>
                                                                                    <div className="foot_claw"></div>
                                                                                    <div className="foot_claw"></div>
                                                                                  </div>
                                                                                  <div className="track track_39">
                                                                                    <div className="foot left">
                                                                                      <div className="foot_claw"></div>
                                                                                      <div className="foot_claw"></div>
                                                                                      <div className="foot_claw"></div>
                                                                                    </div>
                                                                                    <div className="foot right">
                                                                                      <div className="foot_claw"></div>
                                                                                      <div className="foot_claw"></div>
                                                                                      <div className="foot_claw"></div>
                                                                                    </div>
                                                                                    <div className="track track_40">
                                                                                      <div className="foot left">
                                                                                        <div className="foot_claw"></div>
                                                                                        <div className="foot_claw"></div>
                                                                                        <div className="foot_claw"></div>
                                                                                      </div>
                                                                                      <div className="foot right">
                                                                                        <div className="foot_claw"></div>
                                                                                        <div className="foot_claw"></div>
                                                                                        <div className="foot_claw"></div>
                                                                                      </div>
                                                                                      <div className="track track_41">
                                                                                        <div className="foot left">
                                                                                          <div className="foot_claw"></div>
                                                                                          <div className="foot_claw"></div>
                                                                                          <div className="foot_claw"></div>
                                                                                        </div>
                                                                                        <div className="foot right">
                                                                                          <div className="foot_claw"></div>
                                                                                          <div className="foot_claw"></div>
                                                                                          <div className="foot_claw"></div>
                                                                                        </div>
                                                                                        <div className="track track_42">
                                                                                          <div className="foot left">
                                                                                            <div className="foot_claw"></div>
                                                                                            <div className="foot_claw"></div>
                                                                                            <div className="foot_claw"></div>
                                                                                          </div>
                                                                                          <div className="foot right">
                                                                                            <div className="foot_claw"></div>
                                                                                            <div className="foot_claw"></div>
                                                                                            <div className="foot_claw"></div>
                                                                                          </div>
                                                                                          <div className="track track_43">
                                                                                            <div className="foot left">
                                                                                              <div className="foot_claw"></div>
                                                                                              <div className="foot_claw"></div>
                                                                                              <div className="foot_claw"></div>
                                                                                            </div>
                                                                                            <div className="foot right">
                                                                                              <div className="foot_claw"></div>
                                                                                              <div className="foot_claw"></div>
                                                                                              <div className="foot_claw"></div>
                                                                                            </div>
                                                                                            <div className="track track_44">
                                                                                              <div className="foot left">
                                                                                                <div className="foot_claw"></div>
                                                                                                <div className="foot_claw"></div>
                                                                                                <div className="foot_claw"></div>
                                                                                              </div>
                                                                                              <div className="foot right">
                                                                                                <div className="foot_claw"></div>
                                                                                                <div className="foot_claw"></div>
                                                                                                <div className="foot_claw"></div>
                                                                                              </div>
                                                                                              <div className="track track_45">
                                                                                                <div className="foot left">
                                                                                                  <div className="foot_claw"></div>
                                                                                                  <div className="foot_claw"></div>
                                                                                                  <div className="foot_claw"></div>
                                                                                                </div>
                                                                                                <div className="foot right">
                                                                                                  <div className="foot_claw"></div>
                                                                                                  <div className="foot_claw"></div>
                                                                                                  <div className="foot_claw"></div>
                                                                                                </div>
                                                                                                <div className="track track_46">
                                                                                                  <div className="foot left">
                                                                                                    <div className="foot_claw"></div>
                                                                                                    <div className="foot_claw"></div>
                                                                                                    <div className="foot_claw"></div>
                                                                                                  </div>
                                                                                                  <div className="foot right">
                                                                                                    <div className="foot_claw"></div>
                                                                                                    <div className="foot_claw"></div>
                                                                                                    <div className="foot_claw"></div>
                                                                                                  </div>
                                                                                                  <div className="track track_47">
                                                                                                    <div className="foot left">
                                                                                                      <div className="foot_claw"></div>
                                                                                                      <div className="foot_claw"></div>
                                                                                                      <div className="foot_claw"></div>
                                                                                                    </div>
                                                                                                    <div className="foot right">
                                                                                                      <div className="foot_claw"></div>
                                                                                                      <div className="foot_claw"></div>
                                                                                                      <div className="foot_claw"></div>
                                                                                                    </div>
                                                                                                    <div className="track track_48">
                                                                                                      <div className="foot left">
                                                                                                        <div className="foot_claw"></div>
                                                                                                        <div className="foot_claw"></div>
                                                                                                        <div className="foot_claw"></div>
                                                                                                      </div>
                                                                                                      <div className="foot right">
                                                                                                        <div className="foot_claw"></div>
                                                                                                        <div className="foot_claw"></div>
                                                                                                        <div className="foot_claw"></div>
                                                                                                      </div>
                                                                                                      <div className="track track_49">
                                                                                                        <div className="foot left">
                                                                                                          <div className="foot_claw"></div>
                                                                                                          <div className="foot_claw"></div>
                                                                                                          <div className="foot_claw"></div>
                                                                                                        </div>
                                                                                                        <div className="foot right">
                                                                                                          <div className="foot_claw"></div>
                                                                                                          <div className="foot_claw"></div>
                                                                                                          <div className="foot_claw"></div>
                                                                                                        </div>
                                                                                                        <div className="track track_50">
                                                                                                          <div className="foot left">
                                                                                                            <div className="foot_claw"></div>
                                                                                                            <div className="foot_claw"></div>
                                                                                                            <div className="foot_claw"></div>
                                                                                                          </div>
                                                                                                          <div className="foot right">
                                                                                                            <div className="foot_claw"></div>
                                                                                                            <div className="foot_claw"></div>
                                                                                                            <div className="foot_claw"></div>
                                                                                                          </div>
                                                                                                        </div>
                                                                                                      </div>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </div>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const TimerComponent = () => {
//   const [isSwitched, setIsSwitched] = useState(false);
//   const timer = 10000;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsSwitched((prevIsSwitched) => !prevIsSwitched);
//     }, timer);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div id="ui" className={isSwitched ? "switch" : ""}>
//       Content
//     </div>
//   );
// };
