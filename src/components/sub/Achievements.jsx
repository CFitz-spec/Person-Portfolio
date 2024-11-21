import { motion, useMotionValue } from 'framer-motion';

const Achievements = ({ title, amount, children }) => {

    /** So what does this do
     * This is the function that causes the numbers to count up from zero in a smooth animation 
     * How does it do this
     * This does this by 
     * Using motion and useMotionValue from Framer-motion
     * Create a number value and the method useMotionValue to init the value to 0 
     * Creates a function count that takes a param amount
     * this is triggered while the motion.span is in view. Amount is from the props object amount. 
     * Then a flag variable i 
     * updatecount that sets an empty variable timeout
     * if the flag variable i is lower or equal to amount then set number to i +1 
     * Timeout uses the CB updateCount with a delay of 500 ms. This is because.....I don't have alot to show.. FOR NOW! 
     * This gives a smooth animation effect as the numbers will just add up to the param amount. 
     * 
     * else triggers when i == amount and clears the timeout so the timeout method stops running. 
     * This improves performance. 
     */
    const number = useMotionValue(0);
    function count(amount) {
        let i = 0;
        function updateCount() {
            let timeout
            if (i <= amount) {
                number.set(i++)
                timeout = setTimeout(updateCount, 500);
            } else {
                clearTimeout(timeout)
            }
        }
        updateCount()
    }
    return (
        <div className='flex items-end gap-x-3'>
            <span className='text-4xl lg:text-2xl text-gray-300 '>{children}</span>
            <h1 className='flex flex-col gap-y-2'>
                <motion.span className='text-2xl lg:text-xl font-light text-yellow-500 '
                    whileInView={() => count(amount)}
                    viewport={{ once: true }}>
                    {number}
                </motion.span>
                <span className='text-sm tracking-wide text-gray-500 dark:text-white transition-colors'>{title}</span>
            </h1>
        </div >
    )
}

export default Achievements