import styles from './sideSideNavibar.module.css';
import { useState, useRef, useEffect } from 'react';
import { useToggleCollapse } from '~/src/utilities/hooks/useToggleCollapse/useToggleCollapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Co_sideSideNavibar() {

    const [pageSection, setPageSection] = useState(1);
    const component1Ref = useRef();
    const component2Ref = useRef();
    const component3Ref = useRef();
    const component4Ref = useRef();
  
    // Track scroll position
    const handleScroll = () => {
  
      const scrollPosition = window.scrollY + window.innerHeight; // Scroll position + viewport height
      const component1 = component1Ref.current.getBoundingClientRect();
      const component2 = component2Ref.current.getBoundingClientRect();
      const component3 = component3Ref.current.getBoundingClientRect();
      const component4 = component4Ref.current.getBoundingClientRect();
  
      // Detect the section that is currently visible
      if (component1.top <= scrollPosition && component1.bottom > 0) {
        setPageSection(1);
      } else if (component2.top <= scrollPosition && component2.bottom > 0) {
        setPageSection(2);
      } else if (component3.top <= scrollPosition && component3.bottom > 0) {
        setPageSection(3);
      } else if (component4.top <= scrollPosition && component4.bottom > 0) {
        setPageSection(4);
      }
    };
  
    // Add scroll event listener
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  
    const scrollToComponent1 = () => {
      if (component1Ref.current && pageSection !== 1) {
        setPageSection(1);
        component1Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    const scrollToComponent2 = () => {
      if (component2Ref.current && pageSection !== 2) {
        setPageSection(2);
        component2Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    const scrollToComponent3 = () => {
      if (component3Ref.current && pageSection !== 3) {
        setPageSection(3);
        component3Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    const scrollToComponent4 = () => {
      if (component4Ref.current && pageSection !== 4) {
        setPageSection(4);
        component4Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };


    // context_top_collapse toggle
    const context_side_collapseRef = useRef();
    const { toggle: triggerContext_side_collapse } = useToggleCollapse(styles, context_side_collapseRef, 500);


    return (
        <div className={styles.main_sideSideNavibar}>
            <div className={styles.context_side}>
                <a className={`${pageSection == 1 ? styles.actived : ""}`} onClick={scrollToComponent1}>Bookmark 1</a>
                <a className={`${pageSection == 2 ? styles.actived : ""}`} onClick={scrollToComponent2}>Bookmark 2</a>
                <a className={`${pageSection == 3 ? styles.actived : ""}`} onClick={scrollToComponent3}>Bookmark 3</a>
                <a className={`${pageSection == 4 ? styles.actived : ""}`} onClick={scrollToComponent4}>Bookmark 4</a>
            </div>
         
        
            <div className={styles.context_side_nav}>
                <FontAwesomeIcon icon="fa-solid fa-bars" className={styles.ic} onClick={triggerContext_side_collapse}/>
            </div>
            <div className={styles.context_side_nav_spacer}></div>


            <div className={styles.context_side_collapse} ref={context_side_collapseRef}>
                <div className={styles.overlay} onClick={triggerContext_side_collapse}></div>

                <div className={styles.context_side}>
                    <div className={styles.heading}>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic} onClick={triggerContext_side_collapse}/>
                    </div>

                    <a className={`${pageSection == 1 ? styles.actived : ""}`} onClick={scrollToComponent1}>Bookmark 1</a>
                    <a className={`${pageSection == 2 ? styles.actived : ""}`} onClick={scrollToComponent2}>Bookmark 2</a>
                    <a className={`${pageSection == 3 ? styles.actived : ""}`} onClick={scrollToComponent3}>Bookmark 3</a>
                    <a className={`${pageSection == 4 ? styles.actived : ""}`} onClick={scrollToComponent4}>Bookmark 4</a>
                </div>
            </div>


            <div className={styles.context_main}>
                <div className={styles.component1} ref={component1Ref}></div>
                <div className={styles.component2} ref={component2Ref}></div>
                <div className={styles.component3} ref={component3Ref}></div>
                <div className={styles.component4} ref={component4Ref}></div>
            </div>
        </div>
    );
}

export default Co_sideSideNavibar;
