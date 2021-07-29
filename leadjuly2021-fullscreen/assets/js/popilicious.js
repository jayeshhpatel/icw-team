var Popilicious = function () {
    var req = {
        pop_limit:50,
        pop_count:0,
        seconds_to_live:1,
        sensitivity:11,
        element_id:"popilicious",
        onPop:null,
        onClose:null
    };
    return{
        pop:function(_args) {
            var is_popped = 0;
            var props = Object.assign(req,_args);
            var closeBtn = document.getElementById("popilicious-close") !== undefined ? document.getElementById("popilicious-close") : null;
            if(closeBtn !== null){
                closeBtn.addEventListener("click", function (e) {
                    document.getElementById(props.element_id).classList.add("hide-popilicious");
                    is_popped=0;
                    if(props.onClose !== null){
                        props.onClose();
                    }
                });
            }
            window.setTimeout(function(){
                var m_c_loco,m_c_p_diff,m_p_loco = 0;
                document.addEventListener("mousemove", function (e) {
                    m_c_loco = e.pageY - window.pageYOffset;
                    m_c_p_diff = (m_c_loco - m_p_loco) < 0 ?  (m_c_loco - m_p_loco)*-1:(m_c_loco - m_p_loco);
                    if((m_c_loco < props.sensitivity) && (props.pop_count < props.pop_limit)){
                        m_c_p_diff = (m_c_loco - m_p_loco) < 0 ?  (m_c_loco - m_p_loco)*-1:(m_c_loco - m_p_loco);
                        if(((m_c_loco < m_p_loco) && (m_c_p_diff < 20)) && is_popped === 0){
                            is_popped = 1;
                            document.getElementById(props.element_id).classList.remove("hide-popilicious");
                            props.pop_count++;
                            if(props.onPop !== null){
                                props.onPop();
                            }
                        }
                    }
                    m_p_loco = e.pageY - window.pageYOffset;
                });
            }, (props.seconds_to_live*100));
        }
    }
};

