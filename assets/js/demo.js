/**
* AI Claims Processing Demo - ClaimCenter Style
* 4-Part Processing: Documents → Routing → Pattern Matching → Reserves
*/

class ClaimsProcessingDemo {
   constructor() {
       this.currentPart = 0;
       this.isProcessing = false;
       this.processingParts = [
           {
               id: 'part1',
               name: 'Document Processing',
               duration: 8000,
               method: 'processDocuments'
           },
           {
               id: 'part2', 
               name: 'Intelligent Routing',
               duration: 3000,
               method: 'processRouting'
           },
           {
               id: 'part3',
               name: 'Pattern Analysis', 
               duration: 6000,
               method: 'processPatterns'
           },
           {
               id: 'part4',
               name: 'Reserve Intelligence',
               duration: 4000, 
               method: 'processReserves'
           }
       ];
       
       this.documents = [
           {
               id: 'fnol',
               title: 'FNOL Intake Form',
               type: 'Initial Report',
               insights: 'Multi-generational family, elderly driver unconscious, minor with facial trauma',
               complexity: 'high',
               findings: ['Family dynamics', 'Age-related risks', 'Minor involvement']
           },
           {
               id: 'police',
               title: 'Police Incident Report', 
               type: 'Official Report',
               insights: 'High-speed T-bone collision, clear liability, DUI suspicion, extensive damage',
               complexity: 'high',
               findings: ['Speed factor', 'Clear liability', 'Criminal element']
           },
           {
               id: 'medical',
               title: 'Medical Records',
               type: 'Treatment Documentation', 
               insights: 'Unconscious elderly diabetic, facial lacerations requiring surgery, neck injuries',
               complexity: 'high',
               findings: ['Diabetic complications', 'Surgical requirements', 'Growth concerns']
           },
           {
               id: 'photos',
               title: 'Damage Assessment',
               type: 'Visual Evidence',
               insights: 'Tesla Model S extensive damage, glass fragmentation pattern, impact physics',
               complexity: 'medium',
               findings: ['High repair costs', 'Glass pattern analysis', 'Impact severity']
           }
       ];
       
       this.init();
   }

   init() {
       this.setupInitialDocuments();
       this.bindEvents();
   }

   bindEvents() {
       document.getElementById('startProcessing').addEventListener('click', () => this.startProcessing());
       document.getElementById('resetDemo').addEventListener('click', () => this.resetDemo());
   }

   setupInitialDocuments() {
       const grid = document.getElementById('documentGrid');
       
       this.documents.forEach(doc => {
           const docCard = document.createElement('div');
           docCard.className = 'document-card';
           docCard.id = `doc-${doc.id}`;
           
           docCard.innerHTML = `
               <div class="document-header">
                   <div class="document-title">${doc.title}</div>
                   <div class="document-status ready" id="status-${doc.id}">Ready</div>
               </div>
               <div class="document-type">${doc.type}</div>
               <div class="document-insights">${doc.insights}</div>
               <div class="document-findings" id="findings-${doc.id}"></div>
           `;
           
           grid.appendChild(docCard);
       });
   }

   async startProcessing() {
       if (this.isProcessing) return;
       
       this.isProcessing = true;
       document.getElementById('startProcessing').disabled = true;
       
       // Process each part sequentially
       for (let i = 0; i < this.processingParts.length; i++) {
           await this[this.processingParts[i].method]();
           if (i < this.processingParts.length - 1) {
               await this.delay(500);
           }
       }
       
       this.showFinalSummary();
   }

   async processDocuments() {
       // Update section status
       this.updateSectionStatus('part1', 'processing');
       
       // Process each document individually
       for (let i = 0; i < this.documents.length; i++) {
           const doc = this.documents[i];
           await this.processIndividualDocument(doc, i * 1500);
       }
       
       // Wait for all documents to finish
       await this.delay(2000);
       
       // Show compilation result
       await this.showCompilationResult();
       
       this.updateSectionStatus('part1', 'complete');
   }

   async processIndividualDocument(doc, delay) {
       await this.delay(delay);
       
       const docCard = document.getElementById(`doc-${doc.id}`);
       const statusElement = document.getElementById(`status-${doc.id}`);
       const findingsElement = document.getElementById(`findings-${doc.id}`);
       
       // Start processing
       docCard.className = 'document-card processing';
       statusElement.className = 'document-status processing';
       statusElement.textContent = 'Analyzing...';
       
       // Simulate processing time
       await this.delay(2000);
       
       // Show findings
       const findingsHTML = doc.findings.map(finding => 
           `<span class="complexity-indicator ${doc.complexity}">${finding}</span>`
       ).join('');
       findingsElement.innerHTML = findingsHTML;
       
       // Complete processing
       docCard.className = 'document-card complete';
       statusElement.className = 'document-status complete';
       statusElement.textContent = 'Complete ✓';
   }

   async showCompilationResult() {
       const compilationDiv = document.getElementById('compilationResult');
       
       compilationDiv.innerHTML = `
           <h3>📊 Master Document Compilation</h3>
           <div class="complexity-score">9.1/10 CRITICAL COMPLEXITY</div>
           <p>All documents processed and cross-analyzed. Master case profile created.</p>
           
           <div class="key-findings">
               <div class="finding-item">
                   <strong>👧 Minor Involvement</strong><br>
                   8-year-old Sofia with facial lacerations requiring plastic surgery
               </div>
               <div class="finding-item">
                   <strong>👴 Elderly Unconscious</strong><br>
                   69-year-old Roberto, diabetic, unconscious at scene
               </div>
               <div class="finding-item">
                   <strong>🏎️ High-Speed Impact</strong><br>
                   55mph in 35mph zone, severe T-bone collision
               </div>
               <div class="finding-item">
                   <strong>👨‍👩‍👧 Family Dynamics</strong><br>
                   Multi-generational complexity multipliers active
               </div>
           </div>
       `;
       
       compilationDiv.style.display = 'block';
       compilationDiv.classList.add('slide-in');
   }

   async processRouting() {
       this.updateSectionStatus('part2', 'processing');
       
       const content = document.getElementById('part2-content');
       
       // Simulate analysis
       await this.delay(1500);
       
       content.innerHTML = `
           <div class="results-table-container">
               <h4>🎯 Optimal Assignment Complete</h4>
               
               <table class="results-table">
                   <tr>
                       <th>Assigned Adjuster</th>
                       <td><strong>Jennifer Torres</strong></td>
                   </tr>
                   <tr>
                       <th>Match Score</th>
                       <td><span style="color: var(--cc-success); font-weight: 600;">9.6/10 (Optimal)</span></td>
                   </tr>
                   <tr>
                       <th>Specialization</th>
                       <td>Senior BI + Minor Specialist (15 years experience)</td>
                   </tr>
                   <tr>
                       <th>Current Capacity</th>
                       <td><span style="color: var(--cc-success);">Available ✓</span></td>
                   </tr>
               </table>

               <div style="margin-top: 16px;">
                   <h5>✅ Qualification Verification</h5>
                   <div class="complexity-indicator low">✓ Minor certification: QUALIFIED</div>
                   <div class="complexity-indicator low">✓ Facial trauma expertise: HIGH</div>
                   <div class="complexity-indicator low">✓ Family dynamics experience: EXTENSIVE</div>
                   <div class="complexity-indicator low">✓ Medical complexity: ADVANCED</div>
               </div>

               <div style="background: var(--cc-off-white); padding: 12px; border-radius: var(--border-radius); margin-top: 16px;">
                   <strong>📋 Case Brief for Jennifer:</strong><br>
                   <em>"URGENT: Martinez family T-bone collision. 8yr Sofia facial lacerations, 69yr Roberto unconscious/diabetic, 67yr Maria neck/back. Expect pediatric plastic surgery, elderly cardiac complications, family attorney likely. Priority: Document minor consent immediately."</em>
               </div>
           </div>
       `;
       
       this.updateSectionStatus('part2', 'complete');
   }

   async processPatterns() {
       this.updateSectionStatus('part3', 'processing');
       
       const content = document.getElementById('part3-content');
       
       // Simulate database search
       await this.delay(2000);
       
       content.innerHTML = `
           <h4>🔍 Database Pattern Matching</h4>
           <p><strong>Similar Cases Found:</strong> 3 high-confidence matches</p>
           
           <div class="pattern-cards">
               <div class="pattern-card">
                   <h4>📊 Historical Case Matches</h4>
                   <div class="pattern-match">
                       <span>2023 Minor-facial-elderly-family</span>
                       <span class="match-amount">$890K final payout</span>
                   </div>
                   <div class="pattern-match">
                       <span>2024 Unconscious-elderly-diabetic</span>
                       <span class="match-amount">$340K final payout</span>
                   </div>
                   <div class="pattern-match">
                       <span>2022 Facial-scarring-minor</span>
                       <span class="match-amount">$485K final payout</span>
                   </div>
               </div>
               
               <div class="pattern-card">
                   <h4>📈 Predictive Model Results</h4>
                   <div class="complexity-indicator high">📊 91% probability of multiple reserve increases</div>
                   <div class="complexity-indicator high">⚖️ 76% probability of legal representation within 90 days</div>
                   <div class="complexity-indicator high">🏥 88% probability of plastic surgery requirements</div>
                   <div class="complexity-indicator medium">❤️ 65% probability of cardiac complications (elderly diabetic)</div>
               </div>
           </div>
           
           <div style="background: var(--cc-success); color: white; padding: 16px; border-radius: var(--border-radius); margin-top: 16px;">
               <strong>Expected Final Range:</strong> $380K - $950K<br>
               <strong>Estimated Timeline:</strong> 18-24 months
           </div>
       `;
       
       await this.delay(2000);
       this.updateSectionStatus('part3', 'complete');
   }

   async processReserves() {
       this.updateSectionStatus('part4', 'processing');
       
       const content = document.getElementById('part4-content');
       
       await this.delay(1000);
       
       content.innerHTML = `
           <h4>💰 Reserve Intelligence Analysis</h4>
           
           <div class="reserve-comparison">
               <div class="reserve-card traditional">
                   <div class="reserve-label">Traditional Method</div>
                   <div class="reserve-amount">$115,000</div>
                   <div class="reserve-description">Basic injury assessment</div>
               </div>
               <div class="reserve-card ai-enhanced">
                   <div class="reserve-label">AI-Enhanced Prediction</div>
                   <div class="reserve-amount">$612,500</div>
                   <div class="reserve-description">Pattern-based complexity adjustment</div>
               </div>
           </div>
           
           <h5>🧮 Detailed Breakdown</h5>
           <table class="results-table">
               <thead>
                   <tr>
                       <th>Claimant</th>
                       <th>Base Reserve</th>
                       <th>Complexity Multiplier</th>
                       <th>Adjusted Amount</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>Roberto (69, diabetic, unconscious)</td>
                       <td>$30,000</td>
                       <td>2.8x (elderly/diabetic/trauma)</td>
                       <td><strong>$84,000</strong></td>
                   </tr>
                   <tr>
                       <td>Maria (67, neck/back trauma)</td>
                       <td>$15,000</td>
                       <td>1.9x (elderly trauma)</td>
                       <td><strong>$28,500</strong></td>
                   </tr>
                   <tr>
                       <td>Sofia (8, facial trauma)</td>
                       <td>$25,000</td>
                       <td>6.2x (minor facial/growth)</td>
                       <td><strong>$155,000</strong></td>
                   </tr>
                   <tr>
                       <td>Future surgeries</td>
                       <td colspan="2">Revision procedures through age 18</td>
                       <td><strong>$95,000</strong></td>
                   </tr>
                   <tr>
                       <td>Pain & suffering</td>
                       <td colspan="2">Family unit trauma multiplier</td>
                       <td><strong>$180,000</strong></td>
                   </tr>
                   <tr>
                       <td>Legal/administrative</td>
                       <td colspan="2">Expected attorney involvement</td>
                       <td><strong>$25,000</strong></td>
                   </tr>
                   <tr style="background: var(--cc-success); color: white; font-weight: 600;">
                       <td><strong>TOTAL AI RESERVE</strong></td>
                       <td colspan="3"><strong>$612,500</strong></td>
                   </tr>
               </tbody>
           </table>
           
           <div style="background: var(--cc-off-white); padding: 12px; border-radius: var(--border-radius); margin-top: 16px;">
               <strong>Confidence Level:</strong> 84% | <strong>Monitoring Triggers:</strong> Days 7, 21, 45, 90, 180
           </div>
       `;
       
       await this.delay(2000);
       this.updateSectionStatus('part4', 'complete');
   }

   showFinalSummary() {
       const summaryDiv = document.getElementById('finalSummary');
       
       summaryDiv.innerHTML = `
           <h2>🎯 Processing Complete - Martinez Family Claim</h2>
           <p>All AI agents have completed comprehensive analysis. Claim is optimally configured with unprecedented accuracy.</p>
           
           <div class="summary-stats">
               <div class="stat-card">
                   <span class="stat-value">9.1/10</span>
                   <span class="stat-label">Complexity Score</span>
               </div>
               <div class="stat-card">
                   <span class="stat-value">$612,500</span>
                   <span class="stat-label">AI Reserve</span>
               </div>
               <div class="stat-card">
                   <span class="stat-value">Jennifer Torres</span>
                   <span class="stat-label">Optimal Adjuster</span>
               </div>
               <div class="stat-card">
                   <span class="stat-value">18-24 mo</span>
                   <span class="stat-label">Timeline</span>
               </div>
               <div class="stat-card">
                   <span class="stat-value">84%</span>
                   <span class="stat-label">Confidence</span>
               </div>
               <div class="stat-card">
                   <span class="stat-value">$497K</span>
                   <span class="stat-label">Avoided Shortfall</span>
               </div>
           </div>
           
           <div style="background: rgba(255,255,255,0.15); padding: 16px; border-radius: var(--border-radius); margin-top: 20px;">
               <strong>💡 Key Intelligence:</strong> Traditional methods would have set reserves 432% below predicted needs. 
               Our AI system identified critical complexity factors early, preventing massive earnings surprise while ensuring 
               optimal care pathway for the Martinez family.
           </div>
       `;
       
       summaryDiv.style.display = 'block';
       summaryDiv.classList.add('slide-in');
       
       // Show reset button
       const resetBtn = document.getElementById('resetDemo');
       const startBtn = document.getElementById('startProcessing');
       
       resetBtn.style.display = 'inline-block';
       startBtn.textContent = '✅ ANALYSIS COMPLETE';
       startBtn.disabled = true;
   }

   updateSectionStatus(partId, status) {
       const section = document.getElementById(partId);
       const statusElement = document.getElementById(`${partId}-status`);
       
       // Update visual state
       section.className = `process-section ${status}`;
       statusElement.className = `section-status ${status}`;
       
       // Update status text
       switch(status) {
           case 'processing':
               statusElement.textContent = 'Processing...';
               break;
           case 'complete':
               statusElement.textContent = 'Complete ✓';
               break;
           default:
               statusElement.textContent = 'Ready';
       }
   }

   resetDemo() {
       this.isProcessing = false;
       this.currentPart = 0;
       
       // Reset all sections
       this.processingParts.forEach(part => {
           this.updateSectionStatus(part.id, 'ready');
           document.getElementById(`${part.id}-content`).innerHTML = '';
       });
       
       // Reset documents
       this.documents.forEach(doc => {
           const docCard = document.getElementById(`doc-${doc.id}`);
           const statusElement = document.getElementById(`status-${doc.id}`);
           const findingsElement = document.getElementById(`findings-${doc.id}`);
           
           docCard.className = 'document-card';
           statusElement.className = 'document-status ready';
           statusElement.textContent = 'Ready';
           findingsElement.innerHTML = '';
       });
       
       // Hide compilation and summary
       document.getElementById('compilationResult').style.display = 'none';
       document.getElementById('finalSummary').style.display = 'none';
       
       // Reset buttons
       const startBtn = document.getElementById('startProcessing');
       const resetBtn = document.getElementById('resetDemo');
       
       startBtn.disabled = false;
       startBtn.textContent = '▶️ Start AI Analysis';
       resetBtn.style.display = 'none';
       
       // Update sidebar queue
       const queueItems = document.querySelectorAll('.queue-item');
       queueItems.forEach(item => {
           item.style.background = 'transparent';
       });
   }

   delay(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
   }
}

// Initialize demo when page loads
document.addEventListener('DOMContentLoaded', () => {
   new ClaimsProcessingDemo();
});

// Demo analytics
window.demoMetrics = {
   startTime: null,
   interactions: [],
   
   trackEvent(event, data) {
       this.interactions.push({
           timestamp: new Date(),
           event,
           data
       });
       console.log(`Demo Event: ${event}`, data);
   }
};
